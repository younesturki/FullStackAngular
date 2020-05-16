import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username) {
    return this.http.get<Todo[]>(`http://localhost:8585/users/${username}/todos`)
    //console.log("Execute Hello World Bean Service")
  }

  deleteTodo(username, id){
    return this.http.delete(`http://localhost:8585/users/${username}/todos/${id}`)
  }

  retrieveTodo(username, id){
    return this.http.get<Todo>(`http://localhost:8585/users/${username}/todos/${id}`)
  }
  
  updateTodo(username: string, id: number, todo: Todo) {
    return this.http.put<Todo>(`http://localhost:8585/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: string, todo: Todo) {
    return this.http.post<Todo>(`http://localhost:8585/users/${username}/todos`, todo);
  }
}
