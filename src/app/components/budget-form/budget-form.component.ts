import { Component } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent {
  constructor(
    private service: BudgetService
  ) {}

  panelOpenState = false;

  getVal(inputBudget: any){
    this.service.budget = inputBudget;
  }

}
