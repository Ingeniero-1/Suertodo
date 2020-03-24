import { Component, NgZone } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public db  = firebase.firestore();

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public ngZone: NgZone
  ) {
    this.initializeApp();
    this.checkState();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  checkState() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.ngZone.run(() => {
          // User is signed in.
          
          this.navCtrl.navigateRoot('home');


          // this.db.collection("users").doc(user.uid).get().then(response=>{
          //   if (response.exists){
          //     this.navCtrl.navigateRoot('home');
          //   }else{
          //     this.navCtrl.navigateRoot('register-ext');
          //   }
          // });


        })

      } else {
        this.ngZone.run(()=>{
        // No user is signed in.
        this.navCtrl.navigateRoot('login');
        })

      }
    });
  }
}
