import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from '../../core/services/todos.service';

@Component({
  selector: 'todo-app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  constructor(private _todosService: TodosService) {}

  getTodos(): Todo[] {
    return this._todosService.getTodos();
  }
}
