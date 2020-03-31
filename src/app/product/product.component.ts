import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import * as prod from 'src/assets/json/product.json';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  produc:  any  = (prod  as  any).default;

  constructor(private products: ProductService) { }

  ngOnInit() {
    console.log(this.produc);
  }

}
