import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './administration/roles/roles.component';
import { ProvidersComponent } from './administration/providers/providers.component';

//aqui se agrega la navegacion

const routes: Routes = [
  { path: '', redirectTo: '/roles', pathMatch: 'full' },
  { path: 'roles', component: RolesComponent },
  { path: 'providers', component: ProvidersComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
