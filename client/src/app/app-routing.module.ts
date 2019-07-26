import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from "./components/todos/todos.component";
import { AddTodoComponent } from "./components/add-todo/add-todo.component";

const routes: Routes = [
  {path: '', component: TodosComponent},
  {path: 'newTask', component: AddTodoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
