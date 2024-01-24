import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMsg: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email: [""],
        password: [""]
      })
  }

  login(){
    this.http.post('http://localhost:5000/api/v1/user',this.loginForm.value).subscribe((res:any)=>{
       if(res.status == 200){
        console.log("login",res);
        this.router.navigateByUrl('/dashboard')
       }else {
        if(res.status !== 200){
          this.errorMsg = res.message;
          console.log("msg",this.errorMsg);
        }
       }
    })
  }

  AWSlogin(){
    window.location.href = 'https://cognitserver.auth.us-east-1.amazoncognito.com/signup?client_id=42h5av3a5lcdc828eucss13cq8&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fdashboard'
  }
  navigatio(){
    this.router.navigateByUrl('/forget-pass')
  }
}
