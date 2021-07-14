import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/form/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormComponent } from './clients/form/form.component';
import { FormReactiveComponent } from './reactiveCliets/form/reactiveForm.component';
import { DataFormComponent } from './data-form/data-form.component';
import { DataReactiveFormsComponent } from './data-reactive-forms/data-reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    FormComponent,
    FormReactiveComponent,
    DataFormComponent,
    DataReactiveFormsComponent,

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MatRadioModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
