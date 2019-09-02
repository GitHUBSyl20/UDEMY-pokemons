import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';

//ayant été définie au niveau du provider du module, le pokemon service a juste besoin d'etre importé
//sans devoir redéfinir le provider une seconde fois
import { PokemonsService } from './pokemons.service';

@Component({
	selector: 'detail-pokemon',
	templateUrl: './app/pokemons/detail-pokemon.component.html',
	/* 	providers: [PokemonsService] */
})
export class DetailPokemonComponent implements OnInit {

	pokemon: Pokemon = null;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private pokemonsService: PokemonsService) { }

		//void: pas de valeure de retour avec cette méthode
	ngOnInit(): void {
		//récupération des paramètres de la route associés aux composants
		//snapchot : récupération paramètre de facon synchrone 
		//(prog bloqué) tant que l'id du pokemon n'est pas récupéré   
		//+caster le param à droite du signe en un nombre
		//this.route : permet d'accéder au param placé dans notre constructeur
		let id = +this.route.snapshot.paramMap.get('id');
		this.pokemonsService.getPokemon(id)
			.subscribe(pokemon => this.pokemon = pokemon);
	}

	goBack(): void {
		//ne renvoie rien (void mais dirige vers une route)
		this.router.navigate(['/pokemon/all']);
		//window.history.back() mais pas précis si on vient d'ailleur
	}

	goEdit(pokemon: Pokemon): void {
		let link = ['/pokemon/edit', pokemon.id];
		this.router.navigate(link);
	}

	delete(pokemon: Pokemon): void {
		this.pokemonsService.deletePokemon(pokemon)
			.subscribe(_ => this.goBack());
	}

}
