<template>
    <div>
      <h1>Edit Supplier</h1>
      <SupplierForm :supplier="supplier" :onSubmit="updateSupplier" />
    </div>
  </template>
  
  <script>
  import { supplierApi } from '../services/api'; // Assuming you have a supplierApi for making API calls
  import SupplierForm from '../components/SupplierForm.vue';
  
  export default {
    components: { SupplierForm },
    data() {
      return {
        supplier: {
          supplier_id: null, // Use the correct key for supplier ID
          name: '',
          contact_info: '',
          address: '',
        },
      };
    },
    methods: {
      fetchSupplier() {
        const supplierId = this.$route.params.id; // Get the supplier ID from the route params
        supplierApi.show(supplierId).then((response) => {
          this.supplier = response.data; // Assign fetched supplier data to the supplier data property
          console.log('Supplier:', this.supplier);
        }).catch(error => {
          console.error('Error fetching supplier:', error);
        });
      },
      updateSupplier(data) {
        supplierApi.update(this.supplier.supplier_id, data).then(() => {
          this.$router.push('/suppliers'); // Redirect to the supplier list or another page after updating
        }).catch(error => {
          console.error('Error updating supplier:', error);
        });
      },
    },
    mounted() {
      this.fetchSupplier(); // Fetch the supplier when the component is mounted
    },
  };
  </script>
  