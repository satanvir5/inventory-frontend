<template>
    <div class="landing-page">
      <section class="hero">
        <h1>Welcome to Apple Gadgets Store</h1>
        <p>Discover the best of Apple products</p>
        <a href="/products" class="btn btn-primary">Shop Now</a>
      </section>
  
      <section class="products-gallery">
        <h2>Featured Products</h2>
        <div class="product-list">
          <div class="product" v-for="product in featuredProducts" :key="product.id">
            <img :src="product.image" alt="Product Image" />
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <button @click="goToProductPage(product.id)" class="btn btn-info">View Details</button>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import '@/assets/css/style.css'; 
  export default {
    data() {
      return {
        featuredProducts: [
          { id: 1, name: 'iPhone 13', description: 'Latest Apple iPhone', image: 'path_to_image1' },
          { id: 2, name: 'Apple Watch', description: 'Smartwatch by Apple', image: 'path_to_image2' },
          { id: 3, name: 'MacBook Pro', description: 'Powerful laptop', image: 'path_to_image3' },
        ]
      };
    },
    methods: {
      goToProductPage(id) {
        this.$router.push(`/products/${id}`);
      }
    }
  };
  </script>
  