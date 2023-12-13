import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  login: string = 'false';

  constructor(private AuthService: AuthService) {

    this.login = localStorage.getItem('isLoggedIn') as string;

  }

  logouth(){
    this.AuthService.logout();
    location.reload();
  }
}
