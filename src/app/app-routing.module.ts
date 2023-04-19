import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HlavnastrankaComponent } from './hlavnastranka/hlavnastranka.component';
import { LoginComponent } from 'src/app/login/login.component';

const routes: Routes = [
{ path: "hlavnastranka", component: HlavnastrankaComponent }, 
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
