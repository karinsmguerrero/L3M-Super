import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Modulos Generales
import { LoginComponent } from './administration/login/login.component';
//Modulos Administración
import { AdministrationComponent } from './administration/administration.component';
import { HorarioComponent } from './administration/horario/horario.component';
import { PlanillaComponent } from './administration/planilla/planilla.component';
import { ComprasComponent } from './administration/compras/compras.component';
import { ProductosComponent } from './administration/productos/productos.component';
import { ProveedoresComponent } from './administration/proveedores/proveedores.component';
import { SucursalesComponent } from './administration/sucursales/sucursales.component';
import { TrabajadoresComponent } from './administration/trabajadores/trabajadores.component';
import { RolesComponent } from './administration/roles/roles.component';
//Modulos Reportes
import { ReportsComponent } from './reports/reports.component';
import { MenuSelectionComponent } from './reports/menu-selection/menu-selection.component';
import { ProductListComponent } from './reports/product-list/product-list.component';
import { ProductAllListComponent } from './reports/product-all-list/product-all-list.component';
import { ExpensesComponent } from './reports/expenses/expenses.component';
//Modulos Ventas
import { VentasComponent } from './ventas/ventas.component';
import { FacturaComponent } from './ventas/factura/factura.component';


const routes: Routes = [
  { path: '', redirectTo: 'Administracion', pathMatch: 'full' },
  //Rutas Admin
  { path: 'Administracion', component: AdministrationComponent },
  { path: 'Administracion/Login', component: LoginComponent },
  { path: 'Administracion/Role', component: RolesComponent },
  { path: 'Administracion/Purchase', component: ComprasComponent },
  { path: 'Administracion/Schedules', component: HorarioComponent },
  { path: 'Administracion/Employees', component: PlanillaComponent },
  { path: 'Administracion/Product', component: ProductosComponent },
  { path: 'Administracion/Provider', component: ProveedoresComponent },
  { path: 'Administracion/Branch', component: SucursalesComponent },
  { path: 'Administracion/Trabajadores', component: TrabajadoresComponent },

  //Rutas Reportes
  { path: 'Reportes/', component: ReportsComponent },
  { path: 'Reportes/Home', component: ReportsComponent },
  { path: 'Reportes/Login', component: LoginComponent },
  { path: 'Reportes/ListaProductos', component: ProductAllListComponent },
  { path: 'Reportes/ListaProductosSucursal', component: MenuSelectionComponent },
  { path: 'Reportes/ListaProductosSucursal/Cartago', component: ProductListComponent },
  { path: 'Reportes/ListaProductosSucursal/Heredia', component: ProductListComponent },
  { path: 'Reportes/ListaProductosSucursal/SanJose', component: ProductListComponent },
  { path: 'Reportes/ListaProductosSucursal', component: MenuSelectionComponent },
  { path: 'Reportes/Gastos', component: ExpensesComponent },
  { path: 'Reportes/Gastos/Cartago', component: ExpensesComponent },
  { path: 'Reportes/Gastos/Heredia', component: ExpensesComponent },
  { path: 'Reportes/Gastos/SanJose', component: ExpensesComponent },
  { path: 'Reportes/Gastos/Todas', component: ExpensesComponent },
  //Rutas ventas
  { path: 'Ventas', component: VentasComponent },
  { path: 'Ventas/Home', component: VentasComponent },
  { path: 'Ventas/Factura', component: FacturaComponent },
  { path: 'Ventas/Login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
