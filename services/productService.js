const allProdcuctresponse = () => {
   return `<h1>Fetching all products</h1>`
};

const addProdcuctresponse = () => {
   return `<h1>Adding a new product</h1>`
};

const getProdcuctByIdresponse = (params) => {
    const { id } = params;
   return `<h1>Fetching product with ID: ${id}</h1>`
};

module.exports = {
    allProdcuctresponse,
    addProdcuctresponse,
    getProdcuctByIdresponse
}