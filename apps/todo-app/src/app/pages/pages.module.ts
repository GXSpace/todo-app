import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [DashboardComponent, TodosComponent],
  exports: [DashboardComponent, TodosComponent],
})
export class PagesModule {}
