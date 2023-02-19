import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createTodoForm = this.formBuilder.group({
    name: '',
  });


  constructor(
    private crudService: CrudService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit() {
    console.log();
    if (!this.createTodoForm.value.name) {
      alert('O nome não pode ser nulo.');
      return;
    }
    this.crudService.store(this.createTodoForm.value.name);
    this.createTodoForm.reset();

  }

  ngOnInit(): void {
  }

  getTotal() {
    return this.crudService.getTotal();
  }

}
