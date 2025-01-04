import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://inventory-backend.test/api', // Laravel API URL
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export const productApi = {
    list: (params) => apiClient.get('/products', { params }),
    show: (id) => apiClient.get(`/products/${id}`), 
    create: (data) => apiClient.post('/products', data),
    update: (id, data) => apiClient.put(`/products/${id}`, data),
    delete: (id) => apiClient.delete(`/products/${id}`),
};

// export const supplierApi = {
//     list(filters = {}) {
//       return apiClient.get('/suppliers', { params: filters });
//     },
//     store(data) {
//       return apiClient.post('/suppliers', data);
//     },
//     update(id, data) {
//       return apiClient.put(`/suppliers/${id}`, data);
//     },
//     delete(id) {
//       return apiClient.delete(`/suppliers/${id}`);
//     },
//     show(id) {
//       return apiClient.get(`/suppliers/${id}`);
//     },
// };


export const supplierApi = {
    list(filters = {}) {
      return apiClient.get('/suppliers', { params: filters });
    },
    create(data) {  // Renamed 'store' to 'create'
      return apiClient.post('/suppliers', data);
    },
    update(id, data) {
      return apiClient.put(`/suppliers/${id}`, data);
    },
    delete(id) {
      return apiClient.delete(`/suppliers/${id}`);
    },
    show(id) {
      return apiClient.get(`/suppliers/${id}`);
    },
};


export const purchaseApi = {
    list() {
        return apiClient.get(`/purchases`);

    },
    store(data) {
        return apiClient.post(`/purchases`, data);
    },
};