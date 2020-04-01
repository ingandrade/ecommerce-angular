import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.scss']
})
export class AdminproductComponent implements OnInit {

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
