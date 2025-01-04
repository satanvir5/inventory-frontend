<template>
    <div id="home-view">
      <div class="banner">
        <div class="banner-content">
          <img src="@/assets/img/iphone.png" alt="iPhone" />
          <div class="banner-text">
            <h1>The latest.</h1>
            <p>Let them unwrap wonders.</p>
          </div>
        </div>
        <div class="banner-controls">
          <button class="prev"><i class="fa fa-chevron-left"></i></button>
          <button class="next"><i class="fa fa-chevron-right"></i></button>
        </div>
      </div>
      <div class="promo">
        <img src="@/assets/img/gadget-on-the-go.png" alt="Gadget on the Go" />
      </div>
      <div class="product">
        <img src="@/assets/img/realme-buds.png" alt="Realme Buds Air6 Pro" />
        <div class="product-text">
          <h2>realme Buds Air6 Pro</h2>
          <p>Engineered for pure sound</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomeView",
  };
  </script>
  
  <style scoped>
  #home-view {
    padding: 20px;
  }
  
  .banner {
    position: relative;
    background-color: #000;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .banner-content {
    display: flex;
    align-items: center;
  }
  
  .banner-content img {
    height: 200px;
    margin-right: 20px;
  }
  
  .banner-text h1 {
    font-size: 2em;
    margin: 0;
  }
  
  .banner-text p {
    font-size: 1.2em;
    margin: 0;
  }
  
  .banner-controls {
    display: flex;
    align-items: center;
  }
  
  .banner-controls button {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 1.2em;
    cursor: pointer;
  }
  
  .promo img {
    width: 100%;
    margin: 20px 0;
  }
  
  .product {
    display: flex;
    align-items: center;
    margin: 20px 0;
  }
  
  .product img {
    height: 150px;
    margin-right: 20px;
  }
  
  .product-text h2 {
    font-size: 1.5em;
    margin: 0;
  }
  
  .product-text p {
    font-size: 1.2em;
    margin: 0;
  }
  </style>
  