import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public userInput={email:"",password:"",passwordConfirm:""}
  constructor() { }

  ngOnInit() {
  }

  register(){
    if (this.userInput.password!=this.userInput.passwordConfirm){
      alert("Las contraseñas no coinciden.");
      return null;
    }
    firebase.auth().createUserWithEmailAndPassword(this.userInput.email, this.userInput.password).catch((error)=>{
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
    
  }

}
