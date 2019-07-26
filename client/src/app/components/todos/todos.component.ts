import { Component, OnInit } from '@angular/core';
import { Todo } from "../../models/Todo";
import { Member } from "../../models/Member";

import { TodoService } from "../../services/todo.service";
import { MemberService } from "../../services/member.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  members: Member[];

  constructor(private todoService: TodoService,
              private memberService: MemberService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      console.log(todos);
    });

    this.memberService.getMembers().subscribe(members => {
      this.members = members;
      console.log(members);
    })
  }

  removeTodo(todo: Todo) {
    if (confirm('Are You Sure?')) {
      this.todoService.removeTodo(todo).subscribe(() => {
        this.todos.forEach((cur, index) => {
          if (todo._id === cur._id) {
            this.todos.splice(index, 1);
          }
        });
      });
    }
  }

}
