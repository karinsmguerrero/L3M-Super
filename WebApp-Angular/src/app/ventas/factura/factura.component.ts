import { Component, OnInit } from '@angular/core';
import { BillManagementService } from 'src/app/services/bill-management.service';
import { Bill } from '../../models/bill.model';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  constructor( private service : BillManagementService) { }

  ngOnInit() {
    this.service.getBill();
  }

  populateForm(bill : Bill){

  }

}
