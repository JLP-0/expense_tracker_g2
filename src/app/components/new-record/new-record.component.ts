import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.state';
import { Store } from "@ngrx/store";
import * as RecordActions from "../../../app/actions/record.actions"
@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.css']
})
export class NewRecordComponent implements OnInit{
  constructor(private store: Store<AppState>){

  }
  ngOnInit(): void {
      
  }

  public addRecord(name: string, category: string, amount: any){
    this.store.dispatch({type: RecordActions.ADD_RECORD, payload:{name: name, category: category, amount: amount}});
  }

}
