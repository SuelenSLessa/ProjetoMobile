import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public resultado!: string;
  public base!: number;
  public altura!: number;
  constructor() {

  }

public calcularArea() : void{
    this.resultado= "A area é de" + 
                    (this.base*this.altura) / 2 + "cm² .";
} 


}
