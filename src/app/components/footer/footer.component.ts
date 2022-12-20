import { Component } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';
import { Record } from 'src/app/models/record';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public records: Observable<Record[]>
  
  constructor(
    private store: Store<AppState>

  ){
    this.records = store.select("records");
  }
  ngOnInit(): void {

  }

}
