import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private todoDataService: TodoDataService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.refreshTodo();
  }

  refreshTodo() {
    this.todoDataService.retrieveAllTodos('in28minutes').subscribe(todoData => {
     this.todos = todoData;
    })
  }

  deleteTodo(id: number) {
    this.todoDataService.deleteTodo('in28minutes', id).subscribe( response => {
     this.message = `Delete of Todo id: ${id} Successful!`;
      this.refreshTodo();
    });
  }

  updateTodo(id: number) {
    this.router.navigate([id] , {relativeTo: this.route});
  }

  addTodo() {
    this.router.navigate([-1] , {relativeTo: this.route});
  }

}
