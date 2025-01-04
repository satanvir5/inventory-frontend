<template>
    <div class="wrapper">
      <div class="sidebar">
        <ul>
          <li><a href="/products">Products</a></li>
          <li><a href="/suppliers">Suppliers</a></li>
          <li><a href="/landing">Home</a></li>
        </ul>
      </div>
      <div class="content">
        <router-view></router-view> <!-- This is where your page content will go -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SidebarLayout',
  };
  </script>