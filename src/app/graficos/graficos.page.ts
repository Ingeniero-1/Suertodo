import { Component, OnInit, NgZone } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.page.html',
  styleUrls: ['./graficos.page.scss'],
})
export class GraficosPage implements OnInit {
  public slides = [];
  public slides_en = [];
  public slides_es = []
  constructor(public navCtrl: NavController, public ngZone: NgZone, public translate:TranslateService) {

    this.slides_es = [
      {
        img: 'assets/screens/1.png',
        titulo: 'Esta es la pantalla principal, donde vas a jugar'
      },
      {
        img: 'assets/screens/2.jpg',
        titulo: 'Lo primero que haces es elegir un rango de numeros <br> Podes elegir uno ya preestablecido o crear un vos mismo.'
      },
      {
        img: 'assets/screens/3.jpg',
        titulo: 'Luego elegis un numero, dentro de ese rango.'
      },
      {
        img: 'assets/screens/4.png',
        titulo: 'Si adivinaste correctamente, ganas puntos igual a ese rango!'
      },
      {
        img: 'assets/screens/5.png',
        titulo: 'Si adivinas incorrectamente, no pasa nada.'
      },
      {
        img: 'assets/screens/6.png',
        titulo: 'Puedes adivinar hasta 3 veces cada dia. '
      },
      {
        img: 'assets/screens/7.png',
        titulo: 'Al final de tus intentos, tus puntos se acumulan!'
      }
  
    ]
    this.slides_en = [
      {
        img: 'assets/screens/1_en.png',
        titulo: 'This is your Main Screen, where you are going to play!'
      },
      {
        img: 'assets/screens/2_en.png',
        titulo: 'First, you will pick a Range of Numbers <br> You can choose one, or make a custom one. '
      },
      {
        img: 'assets/screens/3_en.jpg',
        titulo: 'Then you will guess a number in that range'
      },
      {
        img: 'assets/screens/4_en.png',
        titulo: 'If you guessed correctly, you win points equal to your range!'
      },
      {
        img: 'assets/screens/5_en.png',
        titulo: 'If you guess wrong, dont worry'
      },
      {
        img: 'assets/screens/6_en.png',
        titulo: 'You can play up to 3 times per day! '
      },
      {
        img: 'assets/screens/7_en.png',
        titulo: 'When your 3 tries are over, we sum the amount of points you got today!'
      }
    ]
    if (this.translate.currentLang=='en'){
      this.slides = this.slides_en;
    }else{
      this.slides = this.slides_es;
    }
  }

  ngOnInit() {
  }
  goToLogin() {
    this.ngZone.run(() => {
      this.navCtrl.navigateRoot("login");

    })

  }

}
