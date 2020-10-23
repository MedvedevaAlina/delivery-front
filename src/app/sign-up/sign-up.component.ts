import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: [ './sign-up.component.scss' ]
})
export class SignUpComponent implements OnInit {
  email;
  password;
  passwordCheck;
  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;


  constructor(private auth: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [ null, [ Validators.required, Validators.pattern(this.emailRegx) ] ],
      password: [ null, Validators.required ]
    });
  }

  submit(): any  {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }

  signUp(): any {
    console.log(this.email, this.password, this.passwordCheck);
    if (this.password !== this.passwordCheck) {
      console.log('different passwords.');
    }
    if (this.email && this.password && this.passwordCheck) {
      // this.auth.registration(this.password, this.email).subscribe(res => {
      //   console.log('res');
      //   this.router.navigate([ 'login' ]);
      // }, err => {
      //   console.error(err);
      // });
    }
  }

}
