<template>
    <div>
        <h1>Product List</h1>
        <button @click="$router.push('/products/create')">Add Product</button>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>SKU</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.product_id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.SKU }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.current_stock_quantity }}</td>
                    <td>
                        <button @click="$router.push(`/products/edit/${product.product_id}`)">Edit</button>
                        <button @click="deleteProduct(product.product_id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="prevPage" :disabled="page === 1">Previous</button>
        <button @click="nextPage">Next</button>
    </div>
</template>

<script>
import { productApi } from '../services/api';

export default { 
    data() {
        return {
            products: [],
            page: 1,
            perPage: 10,
        };
    },
    methods: {
        fetchProducts() {
            productApi.list({ page: this.page, per_page: this.perPage }).then((response) => {
                this.products = response.data.data;
            });
        },
        deleteProduct(id) {
            productApi.delete(id).then(() => this.fetchProducts());
        },
        prevPage() {
            if (this.page > 1) {
                this.page--;
                this.fetchProducts();
            }
        },
        nextPage() {
            this.page++;
            this.fetchProducts();
        },
    },
    mounted() {
        this.fetchProducts();
    },
};
</script>
