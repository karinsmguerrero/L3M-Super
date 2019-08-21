import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import {  HttpClient } from "@angular/common/http";
import { NavbarManagementService } from 'src/app/services/navbar-management.service';
import { Nav } from 'src/app/models/nav.model';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']

})
export class NavigationComponent implements OnInit {
  deviceInfo = null;
  mobile_class: string;
  administration_class:string;
    
    constructor(private http : HttpClient, private deviceService: DeviceDetectorService) {
      this.mobileFunction();
  }
  mobileFunction() {
    console.log('hello `Home` component');
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceInfo);
    console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.

  }

  selectNavFunction(nav : Nav){
  }

  ngOnInit() {
    //this.service.getNav();
  }

}
