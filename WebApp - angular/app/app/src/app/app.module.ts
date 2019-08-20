import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrationComponent } from './administration/administration.component';
import { RolesComponent } from './administration/roles/roles.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RoleManagementService } from './services/role-management.service';
import { VentasComponent } from './ventas/ventas.component';
import { EmployeeManagementService } from './services/employee-management.service';
import { ComprasComponent } from './administration/compras/compras.component';
import { PlanillaComponent } from './administration/planilla/planilla.component';
import { ProductosComponent } from './administration/productos/productos.component';
import { ProveedoresComponent } from './administration/proveedores/proveedores.component';
import { TrabajadoresComponent } from './administration/trabajadores/trabajadores.component';
import { SucursalesComponent } from './administration/sucursales/sucursales.component';
import { HorarioComponent } from './administration/horario/horario.component';
import { LoginComponent } from './administration/login/login.component';
import { ReportsComponent } from './reports/reports.component';
import { MenuSelectionComponent } from './reports/menu-selection/menu-selection.component';
import { ProductListComponent } from './reports/product-list/product-list.component';
import { CostComponent } from './reports/cost/cost.component';
import { ProductAllListComponent } from './reports/product-all-list/product-all-list.component';
import { ExpensesComponent } from './reports/expenses/expenses.component';


@NgModule({
  declarations: [
    AppComponent,
    AdministrationComponent,
    RolesComponent,
    NavigationComponent,
    VentasComponent,
    ComprasComponent,
    PlanillaComponent,
    ProductosComponent,
    ProveedoresComponent,
    TrabajadoresComponent,
    SucursalesComponent,
    HorarioComponent,
    ComprasComponent,
    HorarioComponent,
    PlanillaComponent,
    LoginComponent,
    ReportsComponent,
    MenuSelectionComponent,
    ProductListComponent,
    CostComponent,
    ProductAllListComponent,
    ExpensesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RoleManagementService, EmployeeManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
