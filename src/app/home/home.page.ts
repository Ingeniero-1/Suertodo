import { Component, NgZone } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { TranslateService } from '@ngx-translate/core';
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

  constructor(public ngZone:NgZone, public translate:TranslateService){
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
      this.translate.get('home.rango_invalido').subscribe(data=>{
        alert(data)
        })
      return null;
    }
    if (this.radio != "personalizado") {
      this.range = this.rangeArray[this.radio]
    }

    if (this.range.min >= this.range.max) {
      this.translate.get('home.mayor_menor').subscribe(data=>{
        alert(data)
        })
      return null;
    }

    if (this.userInput < this.range.min || this.userInput > this.range.max) {
      this.translate.get('home.fuera_de_rango').subscribe(data=>{
        alert(data)
        })      
        return null;
    }

    if (this.quantityPerDay >= 3) {
      this.translate.get('home.tres_intentos').subscribe(data=>{
        alert(data)
        })
      return null;
    }

    if ((this.range.max - this.range.min) < 9) {
      this.translate.get('home.diez_numeros').subscribe(data=>{
        alert(data)
        })
      return null;
    }


    var random = this.numbers(this.range.min, this.range.max)
    if (this.quantityPerDay < 3) {
      this.quantityPerDay += 1;
      if (this.userInput == random) {
        this.translate.get('home.ganador', {random: random}).subscribe((res: string) => {
          alert(res);
      });
          this.quantityWins = +1;
        this.puntosTotales = + this.range.max - this.range.min + 1;
      }
      else {
        this.translate.get('home.perdedor', {random: random, userInput: this.userInput}).subscribe((res: string) => {
          alert(res);
      });     
      }
      if (this.quantityPerDay == 3) {
        this.translate.get('home.totales', {puntosTotales: this.puntosTotales}).subscribe((res: string) => {
        alert(res);
        this.enviarDatos(this.puntosTotales);
      })}
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
