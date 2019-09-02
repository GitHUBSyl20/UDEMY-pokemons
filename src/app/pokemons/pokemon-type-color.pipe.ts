import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './pokemon';
/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
*/
//déclaration du pipe avant utilisation
@Pipe({ name: 'pokemonTypeColor' })
export class PokemonTypeColorPipe implements PipeTransform {

	//l'interface pipetransform possède une méthode transform

   //la valeur du paramètre de transform est la prop sur laquelle s'applique notre pipe
 
	transform(type: string): string {

		let color: string;

		switch (type) {
			case 'Feu':
				 //classe de librairie materialize
				color = 'red lighten-1';
				break;
			case 'Eau':
				color = 'blue lighten-1';
				break;
			case 'Plante':
				color = 'green lighten-1';
				break;
			case 'Insecte':
				color = 'brown lighten-1';
				break;
			case 'Normal':
				color = 'grey lighten-3';
				break;
			case 'Vol':
				color = 'blue lighten-3';
				break;
			case 'Poison':
				color = 'deep-purple accent-1';
				break;
			case 'Fée':
				color = 'pink lighten-4';
				break;
			case 'Psy':
				color = 'deep-purple darken-2';
				break;
			case 'Electrik':
				color = 'lime accent-1';
				break;
			case 'Combat':
				color = 'deep-orange';
				break;
			default:
				color = 'grey';
				break;
		}
		return 'chip ' + color;
	}
}
