const api = "http://localhost:4000";

function displayUser(user) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.setAttribute("data-id", user.id);

  li.innerHTML = `
    <div class="user-info">
      <strong>${user.name || '-'}</strong><br>
      ${user.email || '-'}<br>
      ${user.phone || '-'}
    </div>
    <div class="action-buttons">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  const deleteBtn = li.querySelector(".delete-btn");
  const editBtn = li.querySelector(".edit-btn");

  deleteBtn.addEventListener("click", async () => {
    try {
      await axios.delete(`${api}/users/${user.id}`);
      li.remove();
    } catch (err) {
      console.log("Error deleting user:", err);
    }
  });

  editBtn.addEventListener("click", () => {
    // Prefill form for editing
    document.getElementById("username").value = user.name;
    document.getElementById("email").value = user.email;
    document.getElementById("phone").value = user.phone;
    document.getElementById("editingUserId").value = user.id;
  });

  ul.appendChild(li);
}

// On page load – fetch users
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await axios.get(`${api}/users`);
    const users = response.data.data || response.data; // Adjust based on your backend
    users.forEach(displayUser);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
});

async function handleFormSubmit(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const editingUserId = document.getElementById("editingUserId").value;

  const user = { username, email, phone };

  try {
    if (editingUserId) {
      // ✅ UPDATE user
      await axios.put(`${api}/users/${editingUserId}`, user);
    } else {
      // ✅ CREATE user
      const response = await axios.post(`${api}/users`, user);
      displayUser(response.data); // Display only the newly added one
    }

    // Refresh entire list to reflect changes
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
    const response = await axios.get(`${api}/users`);
    const users = response.data.data || response.data;
    users.forEach(displayUser);

    // Clear form
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("editingUserId").value = "";
  } catch (err) {
    console.error("Error saving user:", err);
  }
}

if (typeof module !== "undefined") {
  module.exports = handleFormSubmit;
}
