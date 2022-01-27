import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../core/auth/guards/auth-guard.service';
import { HomeComponent } from '../features/home/component/home.component';
import { JokesComponent } from '../features/jokes/component/jokes.component';
import { LoginComponent } from '../features/login/component/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
    loadChildren: () => import('../features/home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('../features/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'jokes',
    component: JokesComponent,
    canActivate: [AuthGuardService],
    loadChildren: () => import('../features/jokes/jokes.module').then( m => m.JokesModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
