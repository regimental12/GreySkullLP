import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutAPage } from './workout-a';

@NgModule({
  declarations: [
    WorkoutAPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutAPage),
  ],
})
export class WorkoutAPageModule {}
