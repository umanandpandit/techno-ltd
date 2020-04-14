import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // constructor() { }

  helloService(){
    return "Angular Service";
  }

  constructor(private http: HttpClient){}

  getUsers(){
    return this.http.get('https://reqres.in/api/users')
  }
}

// as in spring we used rest-template to comsume service
// w'll use http-client in angular

//--create a instance of HTTPclient
// --method which will pull the external service data

