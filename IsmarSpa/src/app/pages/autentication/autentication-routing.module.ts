import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { LoginComponent } from '../login/login.component';
import { LoginAdminComponent } from '../login-admin/login-admin.component';
import { PrincipalComponent } from 'src/app/dashboard/principal/principal/principal.component';
import { InicioComponent } from 'src/app/primero/inicio/inicio.component';
import { DashaboardModule } from 'src/app/dashboard/dashboard.module';

const routes: Routes = [
  {
    path: '',component: HomeComponent,children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      {path: 'login-admin', component: LoginAdminComponent},
      {path: 'principal', component: PrincipalComponent},
      {path: 'header', component: HeaderComponent},
      {path: 'footer', component: FooterComponent},
      {path: 'sidebar', component: SidebarComponent},
      {path: 'inicio', component: InicioComponent},
      { path: '', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticationRoutingModule { }
