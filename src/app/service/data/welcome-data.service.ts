import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string){}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8585/hello-world-bean')
    //console.log("Execute Hello World Bean Service")
  }
  ///hello-world/path-variable/{name}

  executeHelloWorldBeanServiceWithPathVariable(name) {
    return this.http.get<HelloWorldBean>(`http://localhost:8585/hello-world/path-variable/${name}`)
    //console.log("Execute Hello World Bean Service")
  }
}
