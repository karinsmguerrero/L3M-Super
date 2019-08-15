import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrationComponent } from './administration/administration.component';
import { RolesComponent } from './administration/roles/roles.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RoleManagementService } from './services/role-management.service';
import { VentasComponent } from './ventas/ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministrationComponent,
    RolesComponent,
    NavigationComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RoleManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
