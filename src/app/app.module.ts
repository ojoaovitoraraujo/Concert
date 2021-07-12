
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NewTransactionComponent } from './new-transaction/new-transaction.component';
// import { StatementComponent } from './statement/statement.component';
// import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormComponent } from './clients/form/form.component';
import { FormReactiveComponent } from './reactiveCliets/form/reactiveForm.component';

@NgModule({
  declarations: [
    AppComponent,
    // NewTransactionComponent,
    // StatementComponent,
    // LoginComponent,
    SidebarComponent,
    FormComponent,
    FormReactiveComponent

  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
