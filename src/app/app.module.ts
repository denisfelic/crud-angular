import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './crud/list/list.component';
import { CreateComponent } from './crud/create/create.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowComponent } from './crud/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    HeaderComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
