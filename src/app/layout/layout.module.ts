import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';

import { LayoutRoutingModule } from './layout.routing.module';
import { EmptyPageComponent } from './pages/empty-page/empty-page.component';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PrimeComponentsModule } from './prime-components.module';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';

const components = [
  SearchProductComponent,
  MainPageComponent,
  EmptyPageComponent,
  ProductDetailComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    FormsModule,
    PrimeComponentsModule,
    LayoutRoutingModule,
    SharedModule,
    CalendarModule,
    InputMaskModule
  ]
})
export class LayoutModule { }
