import { Component, OnInit } from '@angular/core';
import { LoginService } from '../utils/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private loginService: LoginService, private router: Router) { }

  login() {
    if(this.email != '' && this.password != '') {
      this.loginService.login(this.email, this.password).then(res => {
        console.log(res);
        localStorage.setItem('user', res.user!.uid);
        this.router.navigate(['/start']);
      }).catch(error => {
        console.log('Sikertelen bejelentkezés.', error);
      })
    }
  }

  ngOnInit(): void {
    if(localStorage.getItem('user')) {
      localStorage.removeItem('user');
      this.loginService.logout().then(() => {
        console.log('Sikeres kijelentkezés.')
      }).catch(error => {
        console.log('Sikertelen kijelentkezés.', error);
      })
    }
  }

}
