import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './administration/roles/roles.component';


const routes: Routes = [
  //{ path: '', redirectTo: '/roles', pathMatch: 'full' },
  { path: 'Role', component: RolesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
