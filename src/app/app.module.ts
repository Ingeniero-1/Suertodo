import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//agregado 10/4/2020
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { NativePageTransitions } from '@ionic-native/native-page-transitions';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyA4Yr0AD7prXAYaISReA5F_DYp4lgroDh8",
  authDomain: "suertodo-a27c0.firebaseapp.com",
  databaseURL: "https://suertodo-a27c0.firebaseio.com",
  projectId: "suertodo-a27c0",
  storageBucket: "",
  messagingSenderId: "134126998713",
  appId: "1:134126998713:web:4517c40609fc4c8ca0b768"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
