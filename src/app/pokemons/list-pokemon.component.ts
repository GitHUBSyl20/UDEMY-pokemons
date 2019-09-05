import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';

import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';

@Component({
	selector: 'list-pokemon',
	templateUrl: './app/pokemons/list-pokemon.component.html'
	//permet d'accéder à l'instance lorsqu'il ya instanciation
	/* providers : [PokemonsService] */
})

//les composants fils peuvent également utiliser ce qui est fourni par le provider !!! 
export class ListPokemonComponent implements OnInit {

	pokemons: Pokemon[] = null;

	//injection d'une instance de pokemon service dans le composant
	//angular garantie que l'instance est unique à travers toute l'application
	//permet d'assurer un stockage provisoire des données
	//il est alors possible d'accéder aux methodes du services

	constructor(private router: Router, private pokemonsService: PokemonsService) { }

	ngOnInit(): void {
	//nous importons les pokemons depuis le service
		this.getPokemons();
	}

	getPokemons(): void {
		this.pokemonsService.getPokemons()
			.subscribe(pokemons => this.pokemons = pokemons);
	}

	selectPokemon(pokemon: Pokemon): void {
		console.log('Vous avez selectionné ' + pokemon.name);
		let link = ['/pokemon', pokemon.id];
		this.router.navigate(link);
	}

}
