import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  errorMsg: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router)  { }
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username:[""],
      email: [""],
      password: [""],
      c_password:[""]
    })
  }
  Register(){
    this.http.post('http://localhost:5000/api/v1/user',this.signupForm.value).subscribe((res:any)=>{
      if(res.status == 200){
        console.log("login",res);
        this.router.navigateByUrl('/dashboard')
       } else {
        if(res.status != 200){
          this.errorMsg = res.message
        }
       }
   })
}
}
