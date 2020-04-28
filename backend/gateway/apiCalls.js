const axios = require('axios');

const calls = {
    productsPagination: async ({limit, skip}) => {
        return await axios.get('http://products:3000/paginate?limit=' + limit + '&skip=' + skip, { data: { limit, skip } })
            .then((res) => {
                return res.data.data;
            }).catch((err) => {
                console.log(err);
            })
    },
    products: async () => {
        return await axios.get('http://products:3000/')
            .then((res) => {
                return res.data.data;
            }).catch((err) => {
                console.log(err);
            });
    },
    getProductById: async ({id}) => {
        return await axios.get('http://products:3000/' + id)
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
    brandsPagination: async ({limit, skip}) => {
        return await axios.get('http://brands:3000/paginate?limit=' + limit + '&skip=' + skip, { data: { limit, skip } })
            .then((res) => {
                return res.data.data;
            }).catch((err) => {
                console.log(err);
            })
    },
    getBrandById: async ({id}) => {
        return await axios.get('http://brands:3000/' + id)
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
    usersPagination: async ({limit, skip}) => {
        return await axios.get('http://brands:3000/users?limit=' + limit + '&skip=' + skip, { data: { limit, skip } })
            .then((res) => {
                return res.data.data;
            }).catch((err) => {
                console.log(err);
            })
    },
    getUserById: async ({id}) => {
        return await axios.get('http://users:3000/' + id)
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
    ordersPagination: async ({limit, skip}) => {
        return await axios.get('http://orders:3000/paginate?limit=' + limit + '&skip=' + skip, { data: { limit, skip } })
            .then((res) => {
                return res.data.data;
            }).catch((err) => {
                console.log(err);
            })
    },
    getOrderById: async ({id}) => {
        return await axios.get('http://orders:3000/' + id)
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
    },
    categoriesPagination: async ({limit, skip}) => {
        return await axios.get('http://categories:3000/paginate?limit=' + limit + '&skip=' + skip, { data: { limit, skip } })
            .then((res) => {
                return res.data.data;
            }).catch((err) => {
                console.log(err);
            })
    },
    getCategoryById: async ({id}) => {
        return await axios.get('http://categories:3000/' + id)
            .then((res) => {
                return res.data.data;
            }).catch((err) => {
                console.log(err);
            });
    },
}

module.exports = {
    calls
}