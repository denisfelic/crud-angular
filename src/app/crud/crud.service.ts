import { Injectable } from '@angular/core';
import { Item } from './types';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private listItem: Item[] = [];
  private total = 0;

  markAsCompleted(itemId: number) {
    this.listItem.
      forEach(item => {
        if (item.id == itemId) {
          item.completed = true;
        }
      })
  }

  getListItems(): Item[] {
    return this.listItem;
  }

  getTotal(): Number {
    return this.total;
  }


  get(id: number) {
    return this.listItem.find(item => item.id === id);
  }

  store(name: string) {
    this.listItem.push({
      id: this.total,
      name: name,
      completed: false,
    });
    this.total++;
  }


  remove(toRemoveId: number) {
    this.listItem = this.listItem.filter((item) => item.id !== toRemoveId);
    this.total--;
  }

}
