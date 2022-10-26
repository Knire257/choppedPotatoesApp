import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  errorMsg = "";
 
  constructor(private auth: AuthService, private router: Router) { }

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "Please provide an username"
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Please provide a password"
    } else {
      let response = this.auth.login(this.username, this.password);
      if (response === 200) {
        this.router.navigate(['home']);
      } else {
        this.errorMsg = "There was an error, please check your credentials and try again"
      }
    }
  }

  ngOnInit(): void {
  }

}
