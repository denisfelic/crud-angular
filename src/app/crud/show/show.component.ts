import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { Item } from '../types';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {

  todo?: Item;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private crudService: CrudService
  ) {
    const routeParams = this.route.snapshot.paramMap;
    const todoId = routeParams.get("todoId");
    const requestedTodo = this.crudService.get(Number(todoId));
    if (requestedTodo) {
      this.todo = requestedTodo;
    }

  }


  removeTodo(itemId: number | string) {
    this.crudService.remove(Number(itemId));
    alert(`Item ${this.todo?.name} removida!`);
    this.router.navigate(['/']);
  }
}
