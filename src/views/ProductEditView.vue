<template>
    <div>
        <h1>Edit Product</h1>
        <ProductForm :product="product" :onSubmit="updateProduct" />
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
                product_id: null, // Use the correct key for product ID
                name: '',
                SKU: '',
                price: 0,
                initial_stock_quantity: 0,
            },
        };
    },
    methods: {
        fetchProduct() {
            const productId = this.$route.params.id; // Get the product ID from the route params
            productApi.show(productId).then((response) => {
                this.product = response.data; // Assign fetched product to the product data property
                console.log('Product:', this.product);
            }).catch(error => {
                console.error('Error fetching product:', error);
            });
        },
        updateProduct(data) {
            productApi.update(this.product.product_id, data).then(() => {
                this.$router.push('/'); // Redirect to the product list or another page after updating
            }).catch(error => {
                console.error('Error updating product:', error);
            });
        },
    },
    mounted() {
        this.fetchProduct(); // Fetch the product when the component is mounted
    },
};
</script>
