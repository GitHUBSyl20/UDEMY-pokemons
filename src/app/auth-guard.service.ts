import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }
	from '@angular/router';
import { AuthService } from './auth-service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private authService: AuthService, private router: Router) { }
//future route appellé, et futur état du router de l'application qui devra passer la verification du guard
//retourne un boolean 
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let url: string = state.url;
		return this.checkLogin(url);
	} 

	checkLogin(url: string): boolean {
		if (this.authService.isLoggedIn) { return true; }
		this.authService.redirectUrl = url;
		this.router.navigate(['/login']);

		return false;
	}

}