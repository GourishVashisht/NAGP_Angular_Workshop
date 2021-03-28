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

const components = [
  SearchProductComponent,
  MainPageComponent,
  EmptyPageComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    PrimeComponentsModule,
    LayoutRoutingModule,
    SharedModule,
    CalendarModule,
    InputMaskModule
  ]
})
export class LayoutModule { }
