import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WorkoutAPage } from '../workout-a/workout-a';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  StartWorkout(){
    this.navCtrl.push(WorkoutAPage);
  }

}
