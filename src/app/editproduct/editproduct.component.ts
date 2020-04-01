import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../interface/product';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  ProdList: any = [];
  updateProdForm: FormGroup;
  p: Product;

  constructor(
    private actRoute: ActivatedRoute,
    public prod: ProductService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
    ) {
      const id = this.actRoute.snapshot.paramMap.get('id');
      this.prod.getProductById(id).subscribe((data) => {
        this.updateProdForm = this.fb.group({
          Title:[data.Title],
          description:[data.description],
          price:[data.price],
          img:[data.img],
          stock:[data.stock]
        });
        this.p = data;
      })
    }

  ngOnInit(): void {
    this.updateForm();
  }

  updateForm(){
    this.updateProdForm = this.fb.group({
      Title:[''],
      description:[''],
      price:[''],
      img:[''],
      stock:['']
    })
  }

  submitForm(){
    const id = this.actRoute.snapshot.paramMap.get('id');
    console.group(id);
    console.log(this.updateProdForm.value);
    this.prod.UpdateProduct(id, this.updateProdForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/admin/product'))
    })
  }

}
