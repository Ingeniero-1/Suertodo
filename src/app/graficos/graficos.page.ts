import { Component, OnInit, NgZone } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.page.html',
  styleUrls: ['./graficos.page.scss'],
})
export class GraficosPage implements OnInit {

  constructor(public navCtrl: NavController, public ngZone: NgZone) { }

  ngOnInit() {
  }
  goToLogin() {
    this.ngZone.run(() => {
      this.navCtrl.navigateRoot("login");
    })

  }

  slides = [
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
}
