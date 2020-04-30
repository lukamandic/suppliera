const axios = require('axios');

const categoryMutations = {
    createCategory: async ( args ) => {
        return await axios.post('http://categories:3000/insert', { args })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
}

module.exports = {
    categoryMutations
};