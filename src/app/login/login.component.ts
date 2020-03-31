import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getFoms();
  }

  getFoms(){
    this.form = this.fb.group({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),

    });
  }

  onSubmit(form: NgForm){
    console.log(form.value);
  }
}
