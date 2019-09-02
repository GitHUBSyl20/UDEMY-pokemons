import { Component } from '@angular/core';
//onInit est une interface!

//indique que cette classe est un component (avec le @)
@Component({
	selector: 'pokemon-app',
	templateUrl: './app/app.component.html'
})
export class AppComponent {
	/* 
	//propriété de la classe donc privé et typé comme étant un tableau de Pokemon
	private pokemons: Pokemon[] = null; 
	private title : String = "liste des pokemons";
	private value : string = null;
	values= "";
	age= 17; 
	//lifecycle methode se produisant automatique au chargement du composant. il est possibe de la surcharger
	ngOnInit(){
		//on remplie le tableau initialisé précedement par les valeurs importées 
		this.pokemons = POKEMONS
	}

	selectPokemon(pokemon: Pokemon){
		alert("vous avez cliquer sur "+ pokemon.name)
	}
 */
/* 	onClick(){
		console.log("a été cliqué");
	}
	//typage fort
	onKey(event: KeyboardEvent){
		this.value= "bonjour " + (<HTMLInputElement>event.target).value;
	} */

/* 	onKey2(value: string){
		this.value = "aurevoir " + value
	} */

 }
