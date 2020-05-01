const axios = require('axios');

const productMutations = {
    createProduct: async ( args ) => {
        return await axios.post('http://products:3000/insert', { args })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    deleteProduct: async ( args ) => {
        return await axios.delete('http://products:3000/delete', { params: { args } })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    updateProduct: async ( args ) => {
        return await axios.put('http://products:3000/update', { args })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

module.exports = {
    productMutations
};