import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';
import { Pokemon } from './pokemon';

@Component({
	selector: 'pokemon-form',
	templateUrl: './app/pokemons/pokemon-form.component.html',
	//plusieurs feuilles de style mais un seul template
	styleUrls: ['./app/pokemons/pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

	@Input() pokemon: Pokemon; // propriété d'entrée du composant
	types: Array<string>; // types disponibles pour un pokémon : 'Eau', 'Feu', etc ...

	constructor(
		private pokemonsService: PokemonsService,
		private router: Router) { }

	ngOnInit() {
		// Initialisation de la propriété types
		this.types = this.pokemonsService.getPokemonTypes();
	}

	// Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
    //le pokemon en cours d'édition possède-t-il le type passé en paramètre
    //permet de précocher les checkbox correspondant types déja présent au moment du chargement du formulaire
	hasType(type: string): boolean {
		let index = this.pokemon.types.indexOf(type);
		if (~index) return true;
		return false;
	}

	// Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
	selectType($event: any, type: string): void {
		//modèle du pokemon mis à jour en ajoutant à chaque fois que l'utilisateur selectionne ou désélectionne un type
		let checked = $event.target.checked;
		console.log("selectType")
		if (checked) {
			this.pokemon.types.push(type);
		} else {
			let index = this.pokemon.types.indexOf(type);
			if (~index) {
				this.pokemon.types.splice(index, 1);
			}
		}
	}

 	//Valide le nombre de types pour chaque pokémon
    //si le tableau de pokemon est non nul et le type déja présent alors on ne peut pas le choisir
    //si le nombre de type de pokmeon est sup ou égal à 3 et n'est pas présent alors on ne peut le rajouter
    //ces deux cas renvoie false : le disabled est alors true car il inverse le boolean. 
    //On ne peut pas choisir ou rajouter cet type

	isTypesValid(type: string): boolean {
		console.log("istypeValid")
		//si un seul type présente et appartenant au pokemon en cours d'édition
		//alors type disabled
		if (this.pokemon.types.length === 1 && this.hasType(type)) {
			return false;
		} 

		//si plus de 3 types et le type n'appartient pas au pokemon en cours d'édition
		//alors type disabled
		if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
			return false;
		}

		return true;
	}

	//La méthode appelée lorsque le formulaire est soumis.
    //redirection vers la page de présentation
    //changement pris en compte grace directive ng Model
	onSubmit(): void {
		this.pokemonsService.updatePokemon(this.pokemon)
			.subscribe(() => this.goBack());
	}

	goBack(): void {
		let link = ['/pokemon', this.pokemon.id];
		this.router.navigate(link);
	}

}
