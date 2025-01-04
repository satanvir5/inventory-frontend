<template>
    <div>
        <h1>Create Product</h1>
        <ProductForm :product="product" :onSubmit="createProduct" />
    </div>
</template>

<script>
import { productApi } from '../services/api';
import ProductForm from '../components/ProductForm.vue';

export default {
    components: { ProductForm },
    data() {
        return {
            product: {
                name: '',
                SKU: '',
                price: 0,
                initial_stock_quantity: 0,
            },
        };
    },
    methods: {
        createProduct(data) {
            productApi.create(data).then(() => this.$router.push('/'));
        },
    },
};
</script>
