import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleMeetComponent } from '../schedule-meet/schedule-meet.component';
@Component({
  selector: 'app-meet-info',
  templateUrl: './meet-info.component.html',
  styleUrls: ['./meet-info.component.scss']
})
export class MeetInfoComponent {
  constructor( private dialog: MatDialog){
    }
    
  openScheduleMeetingModal():void{
    this.dialog.open(ScheduleMeetComponent, {
      width: '550px',
     height:'550px'
    });
  }
}


// openModal(): void {

//   this.dialog.open(PercentageComponent, {
//     width: '450px',
//     data: { students: this.employees }
//   });
// }