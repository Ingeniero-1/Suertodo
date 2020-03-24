import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-register-ext',
  templateUrl: './register-ext.page.html',
  styleUrls: ['./register-ext.page.scss'],
})
export class RegisterExtPage implements OnInit {
  public db  = firebase.firestore();
  public user = {
    username :""
  }
  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  complete(){
    this.db.collection("users").doc(firebase.auth().currentUser.uid).set({
      username: this.user.username,
      email: firebase.auth().currentUser.email,
      timeCreated: firebase.firestore.FieldValue.serverTimestamp(),
      timeUpdated: firebase.firestore.FieldValue.serverTimestamp(),
    }).catch(e=>{
      alert("Error al completar los datos, por favor intente mas tarde.")
    }).then(success=>{
      this.navCtrl.navigateRoot("home");
    })
  }

}
