import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  url = 'http://localhost:4001/user'

  constructor(
    private router: Router,
    private httpClient: HttpClient) { }

    login(email: string, password: string) {
      const body = {
        email: email,
        password: password
      }
      
      return this.httpClient.post(this.url + '/signin', body)
    }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage['token']) {
    //user is already logged in
    //launch the component
    return true;
    }

    //force User to login
    this.router.navigate(['/auth/login'])
    //alert('please log in and then try...')
    //user has not logged in yet
    //stop launching the component
    return false;
  }
}
