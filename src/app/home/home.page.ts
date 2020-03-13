import { Component, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public userInput = null;

  public quantityPerDay = 0;

  public quantityWins = 0;

  public range = { min: null, max: null };

  public puntosTotales = 0;
  public rangeArray;
  public radio;
  public db = firebase.firestore();

  constructor(public ngZone:NgZone) {

    this.ngZone.run(()=>{
      this.rangeArray = [
        { min: 1, max: 10 },
        { min: 1, max: 100 },
        { min: 1, max: 1000 },
      ]
    })

  }

  numbers(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + min));
  }

  checkInteger(ev) {
    console.log(ev)
    if (ev==null){
      return null;
    }
    this.userInput = parseInt(ev.toString().replace(".", ""));
    this.userInput = parseInt(ev.toString().replace(",", ""));
  }

  play() {


    if (this.radio == null) {
      alert("Rango no valido.")
      return null;
    }
    if (this.radio != "personalizado") {
      this.range = this.rangeArray[this.radio]
    }

    if (this.range.min >= this.range.max) {
      alert("El minimo no puede ser mas grande que el maximo");
      return null;
    }

    if (this.userInput < this.range.min || this.userInput > this.range.max) {
      alert("Tu numero esta fuera del rango.");
      return null;
    }

    if (this.quantityPerDay >= 3) {
      alert("Ya jugaste 3 veces! Buena suerte Mañana!");
      return null;
    }

    if ((this.range.max - this.range.min) < 9) {
      alert("El rango minimo debe ser de 10 numeros");
      return null;
    }


    var random = this.numbers(this.range.min, this.range.max)
    if (this.quantityPerDay < 3) {
      this.quantityPerDay += 1;
      if (this.userInput == random) {
        alert("El numero generado es " + random + ", y tu numero es " + this.userInput + ": GANASTE!");
        this.quantityWins = +1;
        this.puntosTotales = + this.range.max - this.range.min + 1;
      }
      else {
        alert("El numero generado es " + random + ", y tu numero es " + this.userInput + ": Perdiste!");
      }
      if (this.quantityPerDay == 3) {
        alert("Tus puntos totales son: " + this.puntosTotales);
        this.enviarDatos(this.puntosTotales);
      }
    }
  }
  logout() {
    firebase.auth().signOut();
  }


  enviarDatos(score) {
    this.db.collection("users").doc(firebase.auth().currentUser.uid).set({
      score:score,
      email:firebase.auth().currentUser.email
    })
  }


  verPuntos(){
    this.db.collection("users").doc(firebase.auth().currentUser.uid).get().then(doc=>{
      alert(doc.data().score);
    })
  }

}
