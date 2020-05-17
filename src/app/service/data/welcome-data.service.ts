import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8585/hello-world-bean');
    //console.log("Execute Hello World Bean Service");
  }

  executeHelloWorldServiceWithPath(name: string) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let header = new HttpHeaders({
    //   AUthorization: basicAuthHeaderString
    // })
    return this.http.get<HelloWorldBean>(`http://localhost:8585/hello-world/path-variable/${name}`,
   // {headers: header}
    );
  
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'user';
  //   let password = 'password';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
