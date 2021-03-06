import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  produc: Product;

  constructor(private products: ProductService) { }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct(){
    this.products.getAllProduct().subscribe(
      resp=>{
        this.produc = resp;
      }
    )
  }

}
