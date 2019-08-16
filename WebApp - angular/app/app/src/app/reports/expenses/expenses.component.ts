import { Component, OnInit } from '@angular/core';
import { ExpenseManagementService } from 'src/app/services/expense-management.service';
import { Expense } from '../../models/expense.model';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  expenseList : Expense[];
  constructor( private service : ExpenseManagementService) { }

  ngOnInit() {
    this.service.getExpense();
  }

  populateForm(expense : Expense){

  }

}
