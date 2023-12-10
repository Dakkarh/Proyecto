import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-dash',
  templateUrl: './card-dash.component.html',
  styleUrls: ['./card-dash.component.css']
})
export class CardDashComponent {

  constructor(private router: Router){

  }

  home(){
    this.router.navigate(['/dashboard/home']);
  }

  clientes(){
    this.router.navigate(['/dashboard/clientes']);
  }

  productos(){
    this.router.navigate(['/dashboard/productos']);
  }

  servicios(){
    this.router.navigate(['/dashboard/servicios']);
  }
}

