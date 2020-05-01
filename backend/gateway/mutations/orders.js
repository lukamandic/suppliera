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
    deleteOrders: async ( args ) => {
        return await axios.delete('http://orders:3000/delete', { params: { args } })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    updateOrders: async ( args ) => {
        return await axios.put('http://orders:3000/update', { args })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

module.exports = {
    orderMutations
};