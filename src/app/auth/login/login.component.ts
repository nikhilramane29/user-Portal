import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email= ''
  password= ''

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private AuthService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onLogin() {
    if(this.email.length == 0) {
      this.toastr.error('Please Enter Email')
    } else if(this.password.length == 0){
      this.toastr.error('Please Enter Password')
    } else{

    this.AuthService
    .login(this.email, this.password)
    .subscribe(response => {
      if (response['status'] == 'success') {
      const data = response['data']
      console.log(data)

      //cache the user info
       sessionStorage['token'] = data['token']
       sessionStorage['firstName'] = data['firstName']
       sessionStorage['lastName'] = data['lastName']

       this.toastr.success(`Welcome ${data['firstName']} to my Store!!!`)

        //goto the dashboard
        this.router.navigate(['/home'])
        
      }else {
        alert(response['error'])
      }
    })
  }
  }
}
