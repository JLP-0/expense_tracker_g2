import { Component, OnInit} from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from 'src/app/app.state';
import { Arithmetic } from 'src/app/models/arithmetic';
import * as ArithmeticActions from 'src/app/actions/arithmetic.actions'
import { Observable } from "rxjs";

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit {
  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
  }

  panelOpenState = false;

  public addArithmetic(budget: any, total_expenses: number, balance: number){
    this.store.dispatch({type: ArithmeticActions.ADD_ARITHMETIC, payload:{budget: budget, total_expenses: total_expenses, balance: balance}});
  }

}
