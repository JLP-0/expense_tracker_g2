import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css'],
})
export class SalidaComponent {
  constructor(private userService: UserService, private router: Router) {}

  onLogout() {
    this.userService
      .logout()
      .then(() => this.router.navigate(['/']))
      .catch((error) => console.log(error));
  }

  is_user_logged_in() {
    return this.userService.is_user_logged_in();
  }
}
