import { createRouter, createWebHistory } from 'vue-router';
import ProductListView from '../views/ProductListView.vue';
import ProductCreateView from '../views/ProductCreateView.vue';
import ProductEditView from '../views/ProductEditView.vue';
import SupplierListView from '../views/SupplierListView.vue';
import SupplierCreateView from '../views/SupplierCreateView.vue';
import SupplierEditView from '../views/SupplierEditView.vue';
import HomeView from '../views/HomeView.vue';
import PurchaseListView from '../views/PurchaseListView.vue';
import PurchaseCreateView from '../views/PurchaseCreateView.vue';


const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'Home' } },
  
  // Product Routes
  { path: '/products', name: 'ProductList', component: ProductListView },
  { path: '/products/create', name: 'ProductCreate', component: ProductCreateView },
  { path: '/products/edit/:id', name: 'ProductEdit', component: ProductEditView, props: true },
  
  // Supplier Routes
  { path: '/suppliers', name: 'SupplierList', component: SupplierListView },
  { path: '/suppliers/create', name: 'SupplierCreate', component: SupplierCreateView },
  { path: '/suppliers/edit/:id', name: 'SupplierEdit', component: SupplierEditView, props: true },
  {
    path: '/purchases',
    name: 'PurchaseList',
    component: PurchaseListView,
},
{
    path: '/purchases/create',
    name: 'PurchaseCreate',
    component: PurchaseCreateView,
},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Gadgets Store`; // Dynamically set the page title
  next();
});

export default router;
