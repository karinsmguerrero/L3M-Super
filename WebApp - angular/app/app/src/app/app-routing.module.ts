import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './administration/roles/roles.component';
import { VentasComponent } from './ventas/ventas.component';
import { TrabajadoresComponent } from './administration/trabajadores/trabajadores.component';
import { SucursalesComponent } from './administration/sucursales/sucursales.component';
import { ProveedoresComponent } from './administration/proveedores/proveedores.component';
import { ProductosComponent } from './administration/productos/productos.component';
import { PlanillaComponent } from './administration/planilla/planilla.component';
import { HorarioComponent } from './administration/horario/horario.component';
import { ComprasComponent } from './administration/compras/compras.component';


const routes: Routes = [
  //{ path: '', redirectTo: '/roles', pathMatch: 'full' },
  { path: 'Role', component: RolesComponent },
  { path: 'Ventas', component: VentasComponent },
  { path: 'Trabajadores', component: TrabajadoresComponent },
  { path: 'Sucursales', component: SucursalesComponent },
  { path: 'Proveedores', component: ProveedoresComponent },
  { path: 'Productos', component: ProductosComponent },
  { path: 'Planilla', component: PlanillaComponent },
  { path: 'Horario', component: HorarioComponent },
  { path: 'Compras', component: ComprasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
