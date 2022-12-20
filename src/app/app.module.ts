import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { BudgetFormComponent } from './components/budget-form/budget-form.component';
import { ActionsComponent } from './components/actions/actions.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NewRecordComponent } from './components/new-record/new-record.component';
import { RecordListComponent } from './components/record-list/record-list.component';
import {MatTableModule} from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/record.reducer';
import { arithmeticReducer } from './reducers/arithmetic.reducer';
import { reduce } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BudgetFormComponent,
    ActionsComponent,
    FooterComponent,
    NewRecordComponent,
    RecordListComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'app-new-record', component: NewRecordComponent},
      {path: 'app-budget-form', component: BudgetFormComponent},
      {path: '', component: BudgetFormComponent},
    ]),
    BrowserModule,
    StoreModule.forRoot({records: reducer}),
    StoreModule.forRoot({arithmetics: reducer}),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
