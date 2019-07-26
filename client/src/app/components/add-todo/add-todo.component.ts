import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TodoService } from "../../services/todo.service";
import { MemberService } from "../../services/member.service";

import { Member } from "../../models/Member";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  members: Member[];

  description: string;
  member: string;
  date: any;

  constructor(private todoService: TodoService,
              private memberService: MemberService,
              private router: Router) { }

  ngOnInit() {
    this.memberService.getMembers().subscribe(members => {
      this.members = members;
      console.log(members)
    })
  }

  selectMember(e){
    this.member = e.target.value;
    console.log(this.member)
  }

  onSubmit() {
    const newTodo = {
      description: this.description,
      memberName: this.member,
      date: new Date()
    };

    console.log(newTodo);
    this.todoService.addTodo(newTodo).subscribe(todo => {
      if (todo.success) {
        this.router.navigate(['/']);
      }
    })
  }
}
