import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '@nagp/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private readonly route: ActivatedRoute, private readonly router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.products = data.productList;
    })
  }

  viewProduct(productCode: string) {
    this.router.navigateByUrl('/home/search/' + productCode);
  }

}
