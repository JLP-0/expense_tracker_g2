import { NgModule, isDevMode } from '@angular/core';
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

import { ReactiveFormsModule } from '@angular/forms';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { RegistroComponent } from './components/registro/registro.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { SalidaComponent } from './components/salida/salida.component';
import { ServiceWorkerModule } from '@angular/service-worker'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BudgetFormComponent,
    ActionsComponent,
    FooterComponent,
    NewRecordComponent,
    RecordListComponent,
    RegistroComponent,
    EntradaComponent,
    SalidaComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'app-new-record', component: NewRecordComponent},
      {path: 'app-budget-form', component: BudgetFormComponent},
      {path: '', component: EntradaComponent},
      { path: 'registro', component: RegistroComponent },
      { path: 'entrada', component: EntradaComponent },
    
    ]),
    BrowserModule,
    StoreModule.forRoot({records: reducer, arithmetics: arithmeticReducer}),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
