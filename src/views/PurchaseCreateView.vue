<template>
    <div>
        <h1>Create Purchase Order</h1>
        <form @submit.prevent="createPurchase">
            <!-- Supplier Selection -->
            <div>
                <label for="supplier">Supplier</label>
                <select v-model="supplierId" required>
                    <option v-for="supplier in suppliers" :key="supplier.supplier_id" :value="supplier.supplier_id">
                        {{ supplier.name }}
                    </option>
                </select>
            </div>

            <!-- Dynamic Items -->
            <div v-for="(item, index) in items" :key="index" class="purchase-item">
                <label for="product">Product</label>
                <select v-model="item.product_id" required>
                    <option v-for="product in products" :key="product.product_id" :value="product.product_id">
                        {{ product.name }}
                    </option>
                </select>

                <label for="quantity">Quantity</label>
                <input v-model="item.quantity" type="number" min="1" required />

                <label for="unit_price">Unit Price</label>
                <input v-model="item.unit_price" type="number" min="0" step="0.01" required />

                <!-- Remove Item Button -->
                <button type="button" @click="removeItem(index)" v-if="items.length > 1">Remove</button>
            </div>

            <!-- Add Item Button -->
            <button type="button" @click="addItem">Add Another Item</button>

            <!-- Submit Button -->
            <button type="submit">Create Purchase</button>
        </form>
    </div>
</template>

<script>
import { purchaseApi, supplierApi, productApi } from '../services/api';

export default {
    data() {
        return {
            suppliers: [], // List of suppliers
            products: [],  // List of products
            supplierId: null, // Selected supplier ID
            items: [
                { product_id: null, quantity: 1, unit_price: 0 }, // Initial item
            ],
        };
    },
    methods: {
        // Fetch list of suppliers
        fetchSuppliers() {
            supplierApi.list()
                .then(response => {
                    this.suppliers = response.data.data;
                })
                .catch(error => {
                    console.error('Error fetching suppliers:', error);
                });
        },

        // Fetch list of products
        fetchProducts() {
            productApi.list()
                .then(response => {
                    this.products = response.data.data;
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        },

        // Add a new item row
        addItem() {
            this.items.push({ product_id: null, quantity: 1, unit_price: 0 });
        },

        // Remove an item row
        removeItem(index) {
            this.items.splice(index, 1);
        },

        // Submit the form to create a purchase
        createPurchase() {
            const purchaseData = {
                supplier_id: this.supplierId,
                purchase_date: new Date().toISOString().split('T')[0], // Today's date
                items: this.items,
            };

            purchaseApi.store(purchaseData)
                .then(() => {
                    // Navigate to the purchase list page after successful creation
                    this.$router.push('/purchases');
                })
                .catch(error => {
                    console.error('Error creating purchase:', error);
                    alert('Failed to create the purchase order. Please try again.');
                });
        },
    },
    mounted() {
        this.fetchSuppliers();
        this.fetchProducts();
    },
};
</script>

<style scoped>
/* Add your custom styles here */
.purchase-item {
    margin-bottom: 15px;
}
button {
    margin-top: 10px;
}
</style>
