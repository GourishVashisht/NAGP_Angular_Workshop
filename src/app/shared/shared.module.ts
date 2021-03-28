import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const components = [
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    components,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
