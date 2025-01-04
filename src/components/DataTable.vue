<!-- src/components/DataTable.vue -->
<template>
    <table class="min-w-full border-collapse">
      <thead>
        <tr>
          <th class="border px-4 py-2" v-for="(header, index) in headers" :key="index">
            {{ header }}
          </th>
          <th class="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td class="border px-4 py-2" v-for="(header, index) in headers" :key="index">
            {{ getItemValue(item, header) }}
          </td>
          <td class="border px-4 py-2">
            <button @click="editItem(item.id)" class="bg-blue-500 text-white p-2">Edit</button>
            <button @click="deleteItem(item.id)" class="bg-red-500 text-white p-2">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    props: {
      items: Array, // The list of items (Products/Suppliers)
      headers: Array, // The headers for the table
      entity: String, // The type of entity (Product/Supplier)
    },
    methods: {
      // Extracts value from the item object based on header name
      getItemValue(item, header) {
        return item[header.toLowerCase().replace(' ', '_')]; // Assumes keys are in snake_case
      },
      editItem(id) {
        this.$router.push({ name: `${this.entity}Edit`, params: { id } });
      },
      deleteItem(id) {
        // Handle item deletion
        console.log(`Delete ${this.entity} with ID:`, id);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles for DataTable */
  </style>
  