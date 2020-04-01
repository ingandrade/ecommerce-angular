import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  prodForm: FormGroup;
  prodArr: any = [];

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public prod: ProductService
  ) { }

  ngOnInit(): void {
    this.addProduct();
  }


  addProduct(){
    this.prodForm = this.fb.group({
      Title:[''],
      description:[''],
      price:[''],
      img:[''],
      stock:['']
    })
  }

  submitForm() {
    this.prod.CreateProduct(this.prodForm.value).subscribe(res => {
      console.log('Issue added!')
      this.ngZone.run(() => this.router.navigateByUrl('/admin/product'))
    });
  }

}
