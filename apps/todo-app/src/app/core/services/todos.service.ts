import { Injectable } from '@angular/core';

type TodoCompletion = 'before' | 'at';

export interface Todo {
  title: string;
  description: string;
  date: Date;
  todoCompletion: TodoCompletion;
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todos: Todo[] = [
    {
      title: 'Plan trip to Berlim',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: new Date('2022-09-19'),
      todoCompletion: 'before',
    },
    {
      title: '21th Party',
      description:
        'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
      date: new Date('2022-09-13'),
      todoCompletion: 'at',
    },
    {
      title: 'Arraial Técnico',
      description:
        'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
      date: new Date('2022-09-23'),
      todoCompletion: 'at',
    },
    {
      title: 'Projeto SAP',
      description:
        'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
      date: new Date('2023-05-20'),
      todoCompletion: 'before',
    },
    {
      title: 'Inscrições turnos IST',
      description:
        'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
      date: new Date('2022-09-13'),
      todoCompletion: 'at',
    },
  ];

  constructor() {}

  getTodos(): Todo[] {
    return this.todos;
  }
}
