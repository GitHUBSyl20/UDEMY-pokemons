import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent } from './list-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';

import { AuthGuard } from '../auth-guard.service';

const pokemonsRoutes: Routes = [
	{
		
		path: 'pokemon',
		canActivate: [AuthGuard],
		children: [
			//protéger toute les routes d'un coup en utilisant un préfix avant et définir les children concernés
			//modifier le nom des chemins concernés /pokemon en /pokemon/all
			{ path: 'all', component: ListPokemonComponent },
			{ path: 'edit/:id', component: EditPokemonComponent, canActivate: [AuthGuard] },
			{ path: ':id', component: DetailPokemonComponent }
		]
	}
];

@NgModule({
	imports: [
		  //routes additionnels par raport à celle du module racine
    //SEULEMENT pour le module racine ont utilise la méthode forRoot
		RouterModule.forChild(pokemonsRoutes)
	],
	exports: [
		RouterModule
	]
})
export class PokemonRoutingModule { }
