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
  //{ path: ':id', component: ReportsComponent },
  //Rutas Admin
  { path: 'Administracion', pathMatch:'prefix',
    children: [
      { path: 'Home', component: AdministrationComponent },
      { path: 'Login', component: LoginComponent },
      { path: 'Role', component: RolesComponent },
      { path: 'Purchase', component: ComprasComponent },
      { path: 'Schedule', component: HorarioComponent },
      { path: 'Employees', component: PlanillaComponent },
      { path: 'Product', component: ProductosComponent },
      { path: 'Provider', component: ProveedoresComponent },
      { path: 'Branch', component: SucursalesComponent },
      { path: 'Trabajadores', component: TrabajadoresComponent },
      { path: '', component: AdministrationComponent },
    ]
},
  

  //Rutas Reportes
  { path: 'Reportes', pathMatch:'prefix',
    children:[
      { path: 'Home', component: ReportsComponent },
      { path: 'Login', component: LoginComponent },
      { path: 'ListaProductos', component: ProductAllListComponent },
      { path: 'ListaProductosSucursal', component: MenuSelectionComponent },
      { path: 'ListaProductosSucursal/Heredia', component: ProductListComponent },
      { path: 'ListaProductosSucursal/Cartago', component: ProductListComponent },
      { path: 'ListaProductosSucursal/SanJose', component: ProductListComponent },
      { path: 'Gastos', component: ExpensesComponent },
      //{ path: 'Gastos/:sucursal', component: ExpensesComponent },
      { path: 'Gastos/Heredia', component: ExpensesComponent },
      { path: 'Gastos/Cartago', component: ExpensesComponent },
      { path: 'Gastos/SanJose', component: ExpensesComponent },
      { path: '', component: LoginComponent }
    ] 
  },
   //Rutas ventas
  { path: 'Ventas', pathMatch:'prefix',
    children:[
      { path: 'Home', component: VentasComponent },
      { path: 'Factura', component: FacturaComponent },
      { path: 'Login', component: LoginComponent },
      { path: '', component: LoginComponent }
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
