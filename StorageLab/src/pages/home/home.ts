import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,public storage:Storage) {
  }
  openStatus(){
    this.navCtrl.push("StatusPage");
  }
  ionViewWillEnter(){
    this.storage.get("Status").then((data) =>
    {this.myStatus = data;}).catch((err) =>{console.log("Database retrieval error")})
  }
}
