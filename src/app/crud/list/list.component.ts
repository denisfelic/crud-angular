import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Item } from '../types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {


  constructor(
    private crudService: CrudService,
  ) { }

  getItems() {
    return this.crudService.getListItems();
  }

  remove(toRemoveId: number) {
    this.crudService.remove(toRemoveId);
  }
}
