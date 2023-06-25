import { Component, OnChanges, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  constructor(private loginService: LoginService ,private router:Router) { }


  login(username: string, password: string): void {
    this.loginService.login(username, password).subscribe(res=>{
      console.log(res);
    if(username==='admin@mozakrety.com' && password==='frgh'){
      alert('Login Success');
      localStorage.setItem('token',res.authToken.token);
      this.router.navigate(['/home'])
    }else{
alert('password or username no match')
    }
    },error => console.error("no match"))
  }
}
