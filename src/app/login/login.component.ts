import { NavVisibilityService } from './../nav-visibility.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, RouterLink, FormsModule, HttpClientModule]
})
export class LoginComponent implements OnInit, OnDestroy {

  loginObj: Login;

  constructor(private http: HttpClient,
    private NavVisibilityService: NavVisibilityService
  ) {
    this.loginObj = new Login();
  }

  ngOnInit(): void {
    this.NavVisibilityService.hideNav();
  }

  ngOnDestroy(): void {
    this.NavVisibilityService.showNav();
  }

  onLogin() {
    this.http.post('http://localhost:8080/api/auth', this.loginObj).subscribe((res: any) => {
      if (res.result) {
        console.log(res)
        alert("login succces")
      }
      else {
        alert(res.message)
        console.log(res)
      }
    })
  }

}
export class Login {
  username: string;
  password: string;
  constructor() {
    this.username = "";
    this.password = "";
  }



}

