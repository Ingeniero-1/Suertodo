import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public userInput={email:"",password:"",passwordConfirm:"", username:""};
  public db = firebase.firestore();
  constructor(public navCtrl:NavController, public translate:TranslateService) { }

  ngOnInit() {
  }

  register(){
    if (this.userInput.password!=this.userInput.passwordConfirm){
      this.translate.get('register.pass_iguales').subscribe(data=>{
        alert(data)
        })
      return null;
    }
    firebase.auth().createUserWithEmailAndPassword(this.userInput.email, this.userInput.password).catch((error)=>{
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    }).then(response=>{


      //user name


      this.db.collection("users").doc(firebase.auth().currentUser.uid).set({
        username: this.userInput.username,
        email: firebase.auth().currentUser.email,
        timeCreated: firebase.firestore.FieldValue.serverTimestamp(),
        timeUpdated: firebase.firestore.FieldValue.serverTimestamp(),
      }).catch(e=>{
        alert("Error al completar los datos, por favor intente mas tarde.")
      }).then(success=>{
        this.navCtrl.navigateRoot("home");
      })


    });
    
  }
  goToLogin(){
    this.navCtrl.navigateRoot("login");
  }
  

}
