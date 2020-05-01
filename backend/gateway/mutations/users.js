const axios = require('axios');

const userMutations = {
    createUser: async ( args ) => {
        return await axios.post('http://users:3000/insert', { args })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    deleteUser: async ( args ) => {
        return await axios.delete('http://users:3000/delete', { params: { args } })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    updateUser: async ( args ) => {
        return await axios.put('http://users:3000/update', { args })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

module.exports = {
    userMutations
};