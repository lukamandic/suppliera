const axios = require('axios');

const orderMutations = {
    createOrder: async ( args ) => {
        return await axios.post('http://orders:3000/insert', { args })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
}

module.exports = {
    orderMutations
};