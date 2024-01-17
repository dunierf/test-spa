import { Routes } from '@angular/router';

// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

export const routes: Routes = [
  {
    path: 'users',
    component: UsersPageComponent,
    title: 'Users'
  },
  {
    path: 'user',
    component: UserPageComponent,
    title: 'User'
  },
  {
    path: 'products',
    component: ProductsPageComponent,
    title: 'Products'
  },
  {
    path: 'product',
    component: ProductPageComponent,
    title: 'Product'
  },
  {
    path: '**',
    component: HomePageComponent,
    title: 'Dashboard'
  }

];
