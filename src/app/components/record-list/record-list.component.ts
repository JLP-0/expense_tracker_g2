import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Record } from 'src/app/models/record';
import * as RecordActions from "../../../app/actions/record.actions"


@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  public records: Observable<Record[]>

  constructor(
    private store: Store<AppState>
  ){
    this.records = store.select("records");
  }
  ngOnInit(): void {

  }
  
}
