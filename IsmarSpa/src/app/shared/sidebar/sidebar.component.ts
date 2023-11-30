import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private router: Router){

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
