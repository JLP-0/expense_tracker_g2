import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  public budget!: any;
  constructor() { }

  getBudget(){
 
    return 4554456546;
  }


}
