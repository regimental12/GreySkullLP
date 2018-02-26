import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkoutAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workout-a',
  templateUrl: 'workout-a.html',
})
export class WorkoutAPage {

  // array to hold button toggle values.

  setDoneArray = [false,false,false,false,false,false,false,false,false,];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  
  public toggleNamedColor(ionicButton, index): void {
    console.log(index);
    if(ionicButton._color === 'dark')
    {
      this.setDoneArray[index] = true;
      ionicButton.color =  'primary';
    }
    else
    {
      this.setDoneArray[index] = false;
      ionicButton.color = 'dark';
    }
    console.log(this.setDoneArray);
  }
    


}
