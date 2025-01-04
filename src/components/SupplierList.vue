<template>
    <div>
        <h1>Supplier List</h1>
        <button @click="$router.push('/suppliers/create')">Add Supplier</button>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Contact Info</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="supplier in suppliers" :key="supplier.supplier_id">
                    <td>{{ supplier.name }}</td>
                    <td>{{ supplier.contact_info }}</td>
                    <td>{{ supplier.address }}</td>
                    <td>
                        <button @click="$router.push(`/suppliers/edit/${supplier.supplier_id}`)">Edit</button>
                        <button @click="deleteSupplier(supplier.supplier_id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button @click="prevPage" :disabled="page === 1">Previous</button>
        <button @click="nextPage">Next</button>
    </div>
</template>

<script>
import { supplierApi } from '../services/api';

export default {
    data() {
        return {
            suppliers: [],
            page: 1,
            perPage: 10,
        };
    },
    methods: {
        fetchSuppliers() {
            supplierApi.list({ page: this.page, per_page: this.perPage }).then((response) => {
                this.suppliers = response.data.data;
            });
        },
        deleteSupplier(id) {
            supplierApi.delete(id).then(() => this.fetchSuppliers());
        },
        prevPage() {
            if (this.page > 1) {
                this.page--;
                this.fetchSuppliers();
            }
        },
        nextPage() {
            this.page++;
            this.fetchSuppliers();
        },
    },
    mounted() {
        this.fetchSuppliers();
    },
};
</script>
