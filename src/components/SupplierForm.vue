<template>
    <div class="container mt-4">
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="name" class="form-label">Supplier Name</label>
          <input id="name" type="text" v-model="formData.name" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="contact_info" class="form-label">Contact Information</label>
          <input id="contact_info" type="text" v-model="formData.contact_info" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Address</label>
          <textarea id="address" v-model="formData.address" class="form-control" required></textarea>
        </div>
        <button type="submit" class="btn btn-success">
          <i class="bi bi-check-circle"></i> Save Supplier
        </button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      supplier: {
        type: Object,
        required: true,
      },
      onSubmit: {
        type: Function,
        required: true,
      },
    },
    data() {
      return {
        formData: { ...this.supplier }, // Initialize formData as a local copy of the supplier prop
      };
    },
    watch: {
      // Watch for changes in the supplier prop and update formData accordingly
      supplier: {
        handler(newSupplier) {
          this.formData = { ...newSupplier };
        },
        deep: true,
      },
    },
    methods: {
      handleSubmit() {
        this.onSubmit(this.formData); // Use the local copy for submission
      },
    },
  };
  </script>
  