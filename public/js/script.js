
const onSubmitHandler  = (e) => {
    e.preventDefault();
    console.log("Event Hit!");
    const product = e.target.productName.value;
    const obj = {
        "productName": product
    }
    axios.post("http://localhost:4000"+"/api/products", obj).then((result) => {
        console.log(result.data.value);
        
    })

}