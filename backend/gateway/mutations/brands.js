const axios = require('axios');

const brandMutations = {
    createBrand: async ( args ) => {
        return await axios.post('http://brands:3000/insert', { args })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
}

module.exports = {
    brandMutations
};