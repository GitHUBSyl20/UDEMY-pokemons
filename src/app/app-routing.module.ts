import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './pokemons/list-pokemon.component';
import { DetailPokemonComponent } from './pokemons/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found.component';

// liste des routes
const appRoutes: Routes = [
	  //routes plus précies d'abord
  //redicection au lancement de l'application
	{ path: '', redirectTo: 'pokemon/all', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	 //export de l'ensemble des routes qui seront utilisés dans le component root
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
