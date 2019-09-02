import { Directive, ElementRef, HostListener, Input } from '@angular/core';

//ElemREf: element du dom sur lequel nous appliquons notre directive
@Directive({
	selector: '[pkmnBorderCard]'
})
 //la directive s'appliquera à tout les éléments du dom
  //possédant un attribut pkmnBorderCard
  //à mettre entre crochet sinon s'applique aux balises
  //il faut préfixer le nom des directives pour éviter des 
  //collisions ac ds balises html standard ou librairies tierces
export class BorderCardDirective {

	private initialColor: string = '#f5f5f5';
	private defaultColor: string = '#009688';
	private defaultHeight: number = 180;

	constructor(private el: ElementRef) {
		this.setBorder(this.initialColor);
		this.setHeight(this.defaultHeight);
	}

	//permettre de choisir directement dans l'element la couleure souhaitée
	@Input('pkmnBorderCard') borderColor: string;
	//@Input() pkmnBorderCard: string; //sans alias le nom est pas super adapté, 
	//utilisation du nom de la directice pour nommer la propriété

	@HostListener('mouseenter') onMouseEnter() {
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
