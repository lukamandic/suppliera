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
}

module.exports = {
    productMutations
};