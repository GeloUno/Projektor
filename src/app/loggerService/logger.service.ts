import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, Post } from '../models/pesron';
import { Body } from '../models/pesron';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  urlServer = ' https://stream-support.herokuapp.com/login';
  // urlServer = 'https://jsonplaceholder.typicode.com/posts/';
  loggedUser = false;

  /**
   * URL from where user com
   *state Router Service in can Activate nead to redirect url after correct authtentication
   *
   * @type {RouterStateSnapshot}
   * @memberof LoggerService
   */
  stateRouterUrl: RouterStateSnapshot;

  constructor(private httpClient: HttpClient) {}
  // l: String, p: String

  /**
   * method  loging  to the server
   *
   * @param email
   * @param password
   *
   * @returns ??
   */
  postLoginUser(email: String, password: String): Observable<Array<Post>> {
    const httpHeaders = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=UTF-8'
    );
    // const httpHeaders1 = new HttpHeaders()
    //   .append('email', 'test@test.pl')
    //   .append('password', 'admn1');
    // const body = new HttpParams()
    //   .append('email', email + '')
    //   .append('password', password + '');
    // // .toString();
    // const body2 = {
    //   email: 'test@test.pl',
    //   password: 'admin1'
    // };
    // const options = new RequestOptions({ headers: httpHeaders });
    const body3 = JSON.stringify({
      email: email,
      password: password
    });
    // console.log(body3);

    // const param = new HttpParams().set('userId', 1 + '');
    return this.httpClient.post<Array<Post>>(this.urlServer, body3, {
      headers: httpHeaders
    });
  }

  // postLoggerPost(post: Post): Observable<Array<Post>> {
  //   return this.httpClient.post<Array<Post>>(this.urlServer, post);
  // }
}
