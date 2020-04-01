import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  Id;
  p:Product;

  constructor(private actRoute: ActivatedRoute, private prod:ProductService) { }

  ngOnInit(): void {
    this.Id = this.actRoute.snapshot.paramMap.get('id');
    this.getProductById(this.Id);
  }

  getProductById(id){
    this.prod.getProductById(id).subscribe((data) => {
      this.p = data;
    })
  }

}
