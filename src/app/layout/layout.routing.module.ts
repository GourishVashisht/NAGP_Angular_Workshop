import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { AuthGuard } from './guards/auth.guard';
import { EmptyPageComponent } from './pages/empty-page/empty-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProductResolver } from './resolver/product.resolver';
import { ProductsResolver } from './resolver/products.resolver';

// Holds the route of the module.
const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'home',
    component: MainPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'search', component: SearchProductComponent, resolve: {
          productList: ProductsResolver
        }
      }, {
        path: 'search/:productId', component: ProductDetailComponent, resolve: {
          product: ProductResolver
        }
      },
      { path: '', redirectTo: 'search', pathMatch: 'full' },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: EmptyPageComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
