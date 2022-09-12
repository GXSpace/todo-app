import { Component, Input, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { Todo } from '../../core/services/todos.service';

@Component({
  selector: 'todo-app-todo',
  template: `
    <div class="rounded-lg md:p-5 group hover:bg-gray-200 duration-300">
      <p class="text-sm text-gray-500">
        <time>{{ formatedDate | titlecase }}</time>
      </p>
      <a href="#" class="group mt-2 block">
        <p class="text-xl font-semibold text-gray-900">{{ todo.title }}</p>
        <p class="mt-3 text-base text-gray-500">
          {{
            todo.description.length > 120
              ? (todo.description | slice: 0:120) + '..'
              : todo.description
          }}
        </p>
      </a>
    </div>
  `,
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  formatedDate = '';
  datetime = '';

  constructor() {}

  ngOnInit(): void {
    const dateFormatter = DateTime.fromJSDate(this.todo.date);
    this.formatedDate +=
      this.todo.todoCompletion === 'before' ? 'complete before ' : '';

    if (dateFormatter < DateTime.now().plus({ day: -1 })) {
      this.formatedDate += dateFormatter.toRelativeCalendar();
    } else {
      this.formatedDate += dateFormatter.toLocaleString(DateTime.DATE_FULL);
    }
  }
}
