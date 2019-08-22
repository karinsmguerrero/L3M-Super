import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import {  HttpClient } from "@angular/common/http";
import { NavbarManagementService } from 'src/app/services/navbar-management.service';
import { Nav } from 'src/app/models/nav.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']

})
/**
 * Componente de navegacion
 * Clase encargada de mostrar
 * los diferentes NavBbar
 */
export class NavigationComponent implements OnInit {
  deviceInfo = null;
  isDesktopDevice = null;
  isMobile = null;
  isAdmin:boolean;
  isReport:boolean;
  isSale:boolean;
  route: Array<String>;
    
    constructor(private http : HttpClient, 
      private deviceService: DeviceDetectorService,
      private router: Router,
      private location: Location) {
        router.events.subscribe((val) => {
          if(location.path() != ''){
            this.route = location.path().split("/");//Verifica cual vista se desea ver, para asi modificar el Navbar
            if(this.route[1]=="Administracion"){
              this.isAdmin=true;
              this.isReport=false;
              this.isSale=false;
            }if(this.route[1]=="Reportes"){
              this.isAdmin=false;
              this.isReport=true;
              this.isSale=false;
            }if(this.route[1]=="Ventas"){
              this.isAdmin=false;
              this.isReport=false;
              this.isSale=true;
            }
            //console.log(this.route[1]=="Administracion");
            //console.log(this.route);
          } else {
            this.isAdmin=true;
            this.isReport=false;
            this.isSale=false;
          }
        });
  }
  /**
   * Metodo encargado de decidir si 
   * se observa desde un dispositivo movil
   */
  mobileFunction() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.isMobile = this.deviceService.isMobile();//Retorna true si es un dispositivo movil
    this.isDesktopDevice = this.deviceService.isDesktop();//Retorna false si se accede desde una computadora
  }


  ngOnInit() {
    this.mobileFunction();

  }

}
