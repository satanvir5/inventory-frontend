<template>
    <div>
      <h1>Create Supplier</h1>
      <SupplierForm :supplier="supplier" :onSubmit="createSupplier" />
    </div>
  </template>
  
  <script>
  import { supplierApi } from '../services/api'; // Assuming supplierApi exists for API calls
  import SupplierForm from '../components/SupplierForm.vue';
  
  export default {
    components: { SupplierForm },
    data() {
      return {
        supplier: {
          name: '',
          contact_info: '',
          address: '',
        },
      };
    },
    methods: {
      createSupplier(data) {
        supplierApi.create(data).then(() => this.$router.push('/suppliers'));
      },
    },
  };
  </script>
  