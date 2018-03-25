import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WorkoutAPage } from '../workout-a/workout-a';
import { DataBase } from '../../providers/DataBase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private dataBase: DataBase) {
    
  }


  StartWorkout(){
    this.navCtrl.push(WorkoutAPage);
  }

}
