import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
    baseUrl:string = "http://localhost:8000/news/create";
  constructor(private httpClient: HttpClient) { }
  public getNews(){
    return this.httpClient.get(`http://localhost:8000/news/view`);
  }
  public getNewsdelete(id){
    return this.httpClient.get(`http://localhost:8000/news/delete/`+id);
  }
  public News(obj){
    return this.httpClient.post(this.baseUrl,obj, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).map(data=>
     data);
}

  public getEditNews(id){
 
    return this.httpClient.get(`http://localhost:8000/news/edit/`+id);
  }
  public Newsupdate(obj,id){
    return this.httpClient.post('http://localhost:8000/news/edit_process/'+id,obj, {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
    }).map(data=>
    data);
  }

  // public login(obj){
  //   return this.httpClient.post<{access_token: string}>('http://localhost:8000/api/login',obj, {
  //     headers: new HttpHeaders({
  //          'Content-Type':  'application/json',
  //        })
  //   }).map(data=>
  //    data);
  // }

  login(email:string, password:string) {
    return this.httpClient.post<{access_token:  string}>('http://localhost:8000/api/login', {email, password}).pipe(tap(res => {
    localStorage.setItem('access_token', res.access_token);
  }))
  }
  
  public register(obj){
    return this.httpClient.post<{access_token: string}>('http://localhost:8000/api/register',obj, {
      headers: new HttpHeaders({
           'Content-Type':  'application/json',
         })
    }).map(data=>
     data);
  }
  // register(email:string, password:string) {
  //   return this.httpClient.post<{access_token: string}>('http://localhost:8000/api/register', {email, password}).pipe(tap(res => {
  //   this.login(email, password)
  // }))
  // }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }


}
