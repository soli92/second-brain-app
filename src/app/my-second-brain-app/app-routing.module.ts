import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../core/auth/guards/auth-guard.service';
import { Oauth2Guard } from '../core/auth/guards/oauth2.guard';
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
  //#region OAUTH2
	// Note: the following routes match OAUTH2 redirect with URL fragments /#access_token=.., /#id_token=...
	// or /#error=... (see example fragments in AuthOauth2Guard).
	// These routes allow to load a Azure/Cognito user session from parameters in the URL fragment,
	// then navigation is re-routed to home page.
	// {
	// 	path: 'unauthorized',
	// 	pathMatch: 'full',
	// 	loadChildren: () => import('app/modules/unauthorized/unauthorized.module').then(m => m.UnauthorizedModule),
	// 	// redirectTo: 'projects', // redirectTo disables the guard
	// 	component: UnauthorizedComponent
	// },
	{
		path: 'access_token',
		pathMatch: 'full',
		// redirectTo: 'projects', // redirectTo disables the guard
		component: HomeComponent,
		canActivate: [Oauth2Guard],
	},
	{
		path: 'id_token',
		pathMatch: 'full',
		component: HomeComponent,
		canActivate: [Oauth2Guard],
	},
	{
		path: 'error',
		pathMatch: 'full',
		component: LoginComponent,
		canActivate: [Oauth2Guard],
	},
	//#endregion OAUTH2
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
