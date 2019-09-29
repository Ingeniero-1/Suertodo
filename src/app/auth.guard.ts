import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public navCtrl: NavController) {

  }

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.isLogged().then((logged: boolean) => {
        if (!logged) {
          this.navCtrl.navigateRoot("login")
        }
        resolve(logged)
      })
    })
  }
  isLogged() {
    return new Promise((resolve) => {
      if (firebase.auth().currentUser) {
        console.log("Esta logeado",firebase.auth().currentUser)
        resolve(true);
      } else {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          unsubscribe();
          if (user) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      }
    });
  }
}
