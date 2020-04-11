import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { NavController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userInput = { email: "", password: "" };
  public currentLang: any = null;

  constructor(public navCtrl: NavController, public alertController: AlertController, public storage: Storage, public translateService:TranslateService) {
    this.storage.get('lang').then((val) => {
      if (val) {
        this.currentLang = val;
      }
    });

  }

  ngOnInit() {
  }
  login() {
    firebase.auth().signInWithEmailAndPassword(this.userInput.email, this.userInput.password).catch((error) => {
      alert(error.message);
    })
  }
  anoLogin() {
    firebase.auth().signInAnonymously().catch(err => {
      alert(err.message);
    })
  }
  goToRegister() {
    this.navCtrl.navigateRoot('register');
  }
  FAQs() {
    this.navCtrl.navigateRoot('about');
  }
  goToLeaderboard() {
    this.navCtrl.navigateRoot('leaderboard');
  }

  changeLang() {

    this.alertController.create({
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'English',
          value: 'en',
          checked: this.currentLang == 'en' ? true : false

        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Español',
          value: 'es',
          checked: this.currentLang == 'es' ? true : false
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.storage.set('lang', data);
            this.currentLang = data;
            this.translateService.setDefaultLang(data);
            this.translateService.use(data);
            console.log('Confirm Ok');
          }
        }
      ]
    }).then(alerta => {
      alerta.present();
    });

  }

}
