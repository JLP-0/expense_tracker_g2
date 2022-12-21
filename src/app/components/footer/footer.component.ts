import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';
import { Record } from 'src/app/models/record';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Arithmetic } from 'src/app/models/arithmetic';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public records: Observable<Record[]>
  public arithmetics!: Observable<Arithmetic[]>;
  public budget: any;
  public amount!: number;
  public totalExpensesAmount!: number;
  public balance!: any;

  constructor(
    private store: Store<AppState>

  ){
    this.records = store.select("records");
    this.arithmetics = store.select("arithmetics");
    console.log(store.select("arithmetics"));
  }
  ngOnInit(): void {

    this.records.forEach((record) => {

      const [lastAmount] = record.slice(-1);

      this.amount = Number(lastAmount.amount);

      this.totalExpensesAmount += this.amount;

    });

    this.arithmetics.forEach((arithmetic) => {
      const [lastRecord] = arithmetic.slice(-1);
      this.budget = lastRecord.budget;
    });
  }

}
