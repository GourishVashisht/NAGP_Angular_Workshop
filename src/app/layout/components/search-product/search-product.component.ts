import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {

  products: any[] = [];
  
  constructor(private readonly router: Router,
  ) { }

  ngOnInit() {
  }


  ngOnDestroy() {
  }

}
