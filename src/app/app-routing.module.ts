import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './clients/form/form.component';
import { DataFormComponent } from './data-form/data-form.component';
import { DataReactiveFormsComponent } from './data-reactive-forms/data-reactive-forms.component';
import { LoginComponent } from './login/form/login.component';
import { FormReactiveComponent } from './reactiveCliets/form/reactiveForm.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'form', component: FormComponent},
  { path: 'dataform', component: DataFormComponent},
  { path: 'sidebar', component: SidebarComponent},
  { path: 'formreactive', component: FormReactiveComponent},
  { path: 'datareactiveform', component: DataReactiveFormsComponent},
  { path: '', redirectTo: 'login',  pathMatch: 'full',}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
