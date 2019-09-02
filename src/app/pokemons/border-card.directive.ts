import { Directive, ElementRef, HostListener, Input } from '@angular/core';

//@directive est une classe !!
//element ref pour définir l'element du dom sur lequel on va plliquer notre directive
//creation d'un element directive à chaque detection de l'attribut pkmnBorderCard et injection
//de l'elemnt du DOM dans le constructeur 
@Directive({
	//
	selector: '[pkmnBorderCard]'
})

//Angular crée une nouvelle instance de notre directive à chaque fois qu'il détecte 
//un élément HTML avec l'attribut correspondant

 //la directive s'appliquera à tout les éléments du dom
  //possédant un attribut pkmnBorderCard
  //à mettre entre crochets sinon s'applique aux balises
  //il faut préfixer le nom des directives pour éviter des 
  //collisions ac ds balises html standard ou librairies tierces
  //exportation pour pouvoir utiliser dans nos composants
export class BorderCardDirective {

	//propriétés 
	private initialColor: string = '#f5f5f5';
	private defaultColor: string = '#009688';
	private defaultHeight: number = 180;

	constructor(private el: ElementRef) {
		this.setBorder(this.initialColor);
		this.setHeight(this.defaultHeight);
	}

	//permettre de choisir directement dans la balise la couleur souhaitée
	//c'est un paramète de la directive optionel
	@Input('pkmnBorderCard') borderColor: string;
	//@Input() pkmnBorderCard: string; //sans alias le nom est pas super adapté, 
	//utilisation du nom de la directive pour nommer la propriété

	@HostListener('mouseenter') onMouseEnter() {
		//valeure par défaut si aucune couleur n'est définie
		this.setBorder(this.borderColor || this.defaultColor);
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.setBorder(this.initialColor);
	}

	//les méthodes qui changent les attributs
	private setBorder(color: string) {
		let border = 'solid 4px ' + color;
		this.el.nativeElement.style.border = border;
	}

	private setHeight(height: number) {
		this.el.nativeElement.style.height = height + 'px';
	}
}
