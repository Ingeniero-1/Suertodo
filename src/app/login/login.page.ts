import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userInput={email:"",password:""};
  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }
  login(){
    firebase.auth().signInWithEmailAndPassword(this.userInput.email,this.userInput.password).catch((error)=>{
      alert(error.message);
    })
  }
  goToRegister(){
    this.navCtrl.navigateRoot('register');
  }
  FAQs(){
    this.navCtrl.navigateRoot('about');
}

}
