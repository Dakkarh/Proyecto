import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',component: HomeComponent,children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      {path: 'header', component: HeaderComponent},
      {path: 'footer', component: FooterComponent},
      {path: 'sidebar', component: SidebarComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticationRoutingModule { }
