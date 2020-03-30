import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {

  constructor(
    public id : number,
    public description: string, 
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]; 

  message: string;
  // = [
  //   new Todo(1, 'Learn to Play', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit Malysia', false, new Date())
  // ]
  // todo = {
  //   id : 1,
  //   description: 'Learn to Play'
  // }

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodods();
  }

  refreshTodods(){
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('in28minutes',id).subscribe(
      response => {
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodods();
      }
    )
  }

  updateTodo(id){
    console.log(`update ${id}`);
    this.router.navigate(['todos',id])
  }

}
