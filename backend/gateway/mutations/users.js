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
}

module.exports = {
    userMutations
};