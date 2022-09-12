import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from './sidebar/sidebar.service';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SidebarComponent, TodoComponent],
  exports: [SidebarComponent, TodoComponent],
  providers: [SidebarService],
})
export class SharedModule {}
