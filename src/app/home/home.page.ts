import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public userInput = 0;

  public quantityPerDay = 0;

  public quantityWins = 0;

  public range = {min: 0, max: 0};

  public puntosTotales = 0;
  public rangeArray;
  public radio;

  constructor() {
    this.rangeArray=[
      {min:1,max:10},
      {min:1,max:100},
      {min:1,max:1000},
    ]
  }

  numbers(min,max){
    return (Math.floor(Math.random()*(max-min+1)+min));
    }

  checkInteger(ev){
    console.log(ev)
    this.userInput=parseInt(ev.replace(".",""));
    this.userInput=parseInt(ev.replace(",",""));
  }

  play(){


    if (this.radio==null){
      alert("Rango no valido.")
      return null;
    }
    if (this.radio!="personalizado"){
      this.range=this.rangeArray[this.radio]
    }

    if (this.range.min>=this.range.max){
      alert("El minimo no puede ser mas grande que el maximo");
      return null;
      }

    if (this.userInput < this.range.min || this.userInput > this.range.max ){
        alert("Tu numero esta fuera del rango.");
        return null;
      }
    
    if (this.quantityPerDay >= 3){
      alert ("Ya jugaste 3 veces! Buena suerte Mañana!");
      return null;
      }

      if ((this.range.max - this.range.min) <9){
        alert ("El rango minimo debe ser de 10 numeros");
        return null;
        }


    var random = this.numbers(this.range.min, this.range.max)
    if (this.quantityPerDay<3){
      this.quantityPerDay+=1;
      if (this.userInput == random) {
        alert("El numero generado es "+random+", y tu numero es "+this.userInput+": GANASTE!");
        this.quantityWins =+1;
        this.puntosTotales =+ this.range.max - this.range.min + 1;
        }    
      else 
        {
        alert("El numero generado es "+random+", y tu numero es "+this.userInput+": Perdiste!");
        }
      if (this.quantityPerDay == 3) {
        alert ("Adivinaste bien " + this.quantityWins + " veces, y tus puntos totales son: " + this.puntosTotales);
      }
      
    }
  } 
}
