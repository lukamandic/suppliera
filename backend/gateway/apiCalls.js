const axios = require('axios');

const calls = {
    products: async () => {
        return await axios.get('http://products:3000/')
            .then((res) => {
                return res.data.data;
            }).catch((err) => {
                console.log(err);
            });
    },
    brands: async () => {
        return await axios.get('http://brands:3000/')
            .then((res) => {
                return res.data.data;
            }).catch((err) => {
                console.log(err);
            });
    },
    users: async () => {
        return await axios.get('http://users:3000/')
            .then((res) => {
                return res.data.data;
            }).catch((err) => {
                console.log(err);
            });
    },
    orders: async () => {
        return await axios.get('http://orders:3000/')
            .then((res) => {
                return res.data.data;
            }).catch((err) => {
                console.log(err);
            });
    },
    categories: async () => {
        return await axios.get('http://categories:3000/')
            .then((res) => {
                return res.data.data;
            }).catch((err) => {
                console.log(err);
            });
    }
}

module.exports = {
    calls
}