import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {
  forgotForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, ) { }
  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['',Validators.compose([Validators.required,Validators.email])]
    })
  }
  login(){
     console.log("value",this.forgotForm.value)
  }

}
