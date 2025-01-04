<template>
    <div>
        <h1>Purchase Orders</h1>
        <!-- Create Purchase Button -->
        <button @click="navigateToCreatePurchase">Create Purchase</button>

        <!-- Purchases Table -->
        <table>
            <thead>
                <tr>
                    <th>Purchase ID</th>
                    <th>Supplier</th>
                    <th>Total Amount</th>
                    <th>Purchase Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="purchase in purchases" :key="purchase.purchase_id">
                    <td>{{ purchase.purchase_id }}</td>
                    <td>{{ purchase.supplier.name }}</td>
                    <td>{{ purchase.total_amount }}</td>
                    <td>{{ purchase.purchase_date }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { purchaseApi } from '../services/api';

export default {
    data() {
        return {
            purchases: [],
        };
    },
    methods: {
        // Fetch purchases from API
        fetchPurchases() {
            purchaseApi.list()
                .then(response => {
                    this.purchases = response.data.data;
                })
                .catch(error => {
                    console.error('Error fetching purchases:', error);
                });
        },

        // Navigate to the Create Purchase page
        navigateToCreatePurchase() {
            this.$router.push('/purchases/create');
        },
    },
    mounted() {
        this.fetchPurchases();
    },
};
</script>
