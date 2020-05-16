import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(private route: ActivatedRoute,
    private todoDataService: TodoDataService,
    private router: Router) { }

ngOnInit() {
  this.id = this.route.snapshot.params['id'];
  this.todo = new Todo(this.id,'', false, new Date());

  if(this.id != -1) {
  this.todoDataService.retrieveTodo('in28minutes', this.id).subscribe( todoData => {
  this.todo = todoData;
  });
}
}

saveTodo() {
  if(this.id === -1){
    this.todoDataService.createTodo('in28minutes', this.todo).subscribe( dataTodo => {
    console.log(dataTodo);
    this.router.navigate(['todos']);
    })
  } else {
    this.todoDataService.updateTodo('in28minutes', this.id, this.todo).subscribe(dataTodo => {
    console.log(dataTodo);
    this.router.navigate(['todos']);
  });
}
}

}
