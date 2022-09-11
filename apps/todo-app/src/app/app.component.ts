import { Component } from '@angular/core';
import { SidebarService } from './shared/sidebar/sidebar.service';

@Component({
  selector: 'todo-app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'todo-app';

  constructor(readonly sidebarService: SidebarService) {}
}
