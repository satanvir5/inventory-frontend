<template>
    <div id="main-layout">
      <header>
        <div class="logo">
          <img src="@/assets/img/logo.png" alt="Apple Gadgets Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="/products">Products</a></li>
            <li><a href="/suppliers">Suppliers</a></li>
            <li><a href="/purchases">Purchase</a></li>
          
          </ul>
        </nav>
       
      </header>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: "MainLayout",
  };
  </script>
  
  <style scoped>
  #main-layout {
    font-family: Arial, sans-serif;
  }
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    padding: 10px 20px;
  }
  
  .logo img {
    height: 40px;
  }
  
  nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  nav ul li {
    margin: 0 10px;
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
  }
  
  .search-bar {
    display: flex;
    align-items: center;
  }
  
  .search-bar input {
    padding: 5px;
    border: none;
    border-radius: 3px;
  }
  
  .search-bar button {
    background-color: #fff;
    border: none;
    padding: 5px;
    cursor: pointer;
  }
  
  .header-icons a {
    color: #fff;
    margin-left: 15px;
    text-decoration: none;
  }
  </style>
  