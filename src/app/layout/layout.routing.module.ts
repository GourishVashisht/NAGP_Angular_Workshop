import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { EmptyPageComponent } from './pages/empty-page/empty-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

// Holds the route of the module.
const routes: Routes = [
  {
    path: 'home',
    component: MainPageComponent,
    children: [
      { path: '', component: SearchProductComponent },
      { path: 'search', component: SearchProductComponent },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '**', component: EmptyPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
