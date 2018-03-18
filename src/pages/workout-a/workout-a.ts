import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-workout-a',
  templateUrl: 'workout-a.html',
})
export class WorkoutAPage {

  // array to hold button toggle values.

  setDoneArray = [false, false, false, false, false, false, false, false, false,];

  amrapArray: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {}

  Amrap(ExcerciseName, index) {
    let temp;
    switch (ExcerciseName) {
      case 'Squat':
        if (this.setDoneArray[index] == true) {
          temp = this.presentAlert();
        }
        break;
      case 'Bench':
        if (this.setDoneArray[index] == true) {
          temp = this.presentAlert();
        }
        break;
      case 'Row':
        if (this.setDoneArray[index] == true) {
          temp = this.presentAlert();
        }
        break;
      default:
        console.log("excersise not found");
    }
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Enter Amrap Amount',
      subTitle: 'How many reps did you do?',
      inputs: [
        {
          name: 'Amount',
          placeholder: '0',
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
            console.log(data);
            return data;
          }
        }
      ]
    });
    alert.present();
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
