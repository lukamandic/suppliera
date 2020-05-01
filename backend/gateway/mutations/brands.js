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
    deleteBrand: async ( args ) => {
        console.log(args);
        return await axios.delete('http://brands:3000/delete', { params: { args } })
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    updateBrand: async ( args ) => {
        return await axios.put('http://brands:3000/update',  { args } )
            .then((res) => {
                return res.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

module.exports = {
    brandMutations
};