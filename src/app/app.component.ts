import { Component } from '@angular/core';
import { NewRecordComponent } from './components/new-record/new-record.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'expense_tracker_g2';
  constructor(private userService: UserService) {}

  is_user_logged_in() {
    return this.userService.is_user_logged_in();
  }
}
