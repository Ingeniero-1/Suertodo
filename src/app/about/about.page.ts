import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  goToLogin() {
    this.navCtrl.navigateRoot("login");
  }
  goToGraphics() {
this.navCtrl.navigateForward("graficos");
  }

}
