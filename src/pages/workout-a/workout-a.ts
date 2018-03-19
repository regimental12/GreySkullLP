import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-workout-a',
  templateUrl: 'workout-a.html',
})
export class WorkoutAPage {

  // needs initialising from DB.
  squatWeight: number = 0;
  benchWeight: number = 0;
  rowWeight: number = 0;
  
  // array to hold button toggle values.
  setDoneArray = [false, false, false, false, false, false, false, false, false,];

  // No. of reps for each exercise.
  amrapArray: any = [0, 0, 0];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {}

  ionViewDidLoad() {}

  Amrap(ExcerciseName, index) {
    switch (ExcerciseName) 
    {
      case 'Squat':
        if (this.setDoneArray[index] == true) {
          this.presentAlert(index);
        }
        break;
      case 'Bench':
        if (this.setDoneArray[index] == true) {
          this.presentAlert(index);
        }
        break;
      case 'Row':
        if (this.setDoneArray[index] == true) {
          this.presentAlert(index);
        }
        break;
      default:
        console.log("excersise not found");
    }
  }

  presentAlert(index) {
    let alert = this.alertCtrl.create({
      title: 'Enter Amrap Amount',
      subTitle: 'How many reps did you do?',
      inputs: [
        {
          name: 'Amount',
          type: 'number'
        }
      ],
      buttons: [
      {
        text: 'Cancel'
      },
      {
        text: 'Enter',
        handler: (data) => {
              this.setAmrapArray(index, data);
        }
      }
      ]
    });
    alert.present();
  }

  setAmrapArray(index, data) {
    switch(index) {
      case 2:
        this.amrapArray[0] = parseInt(data.Amount);
        break;
      case 5:
        this.amrapArray[1] = parseInt(data.Amount);
        break;
      case 8:
        this.amrapArray[2] = parseInt(data.Amount); 
        break;
    }
    console.log(this.amrapArray);
  }

  public toggleNamedColor(ionicButton, index): void {
    console.log(index);
    if (ionicButton._color === 'dark') {
      this.setDoneArray[index] = true;
      ionicButton.color = 'primary';
    }
    else {
      this.setDoneArray[index] = false;
      ionicButton.color = 'dark';
    }
    console.log(this.setDoneArray);
  }

}
