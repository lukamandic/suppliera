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
    deleteCategories: async ( args ) => {
        return await axios.delete('http://categories:3000/delete', { args })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    updateCategories: async ( args ) => {
        return await axios.put('http://categories:3000/update', { args })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

module.exports = {
    categoryMutations
};