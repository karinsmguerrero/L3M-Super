import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrationComponent } from './administration/administration.component';
import { SalesComponent } from './sales/sales.component';
import { ReportsComponent } from './reports/reports.component';
import { RolesComponent } from './administration/roles/roles.component';
import { ProvidersComponent } from './administration/providers/providers.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MobileComponent } from './navigation/mobile/mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministrationComponent,
    SalesComponent,
    ReportsComponent,
    RolesComponent,
    ProvidersComponent,
    NavigationComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
