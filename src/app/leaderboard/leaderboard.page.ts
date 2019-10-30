import { Component, OnInit, NgZone } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {
  public db = firebase.firestore();
  public users = []
  public loaded=false
  constructor(public navCtrl:NavController, public ngZone:NgZone){
    this.initializeScores();
  }

  ngOnInit() {
    
  }
  initializeScores(){
    this.db.collection('users').orderBy('score','desc').limit(10).get().then(query=>{
      var auArray=[]
      query.forEach(doc=>{
        var aux =doc.data();
        aux.id=doc.id;
        auArray.push(aux);
      })
      this.ngZone.run(()=>{
        this.users=auArray;
        this.loaded=true
      })
      
    }).catch(e=>
      
      {this.loaded=true
        console.log(e)});
  }
  goToLogin(){
    this.navCtrl.navigateRoot("login");
  }

}
