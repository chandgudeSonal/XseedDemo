import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-googlee-meet-integration',
  templateUrl: './googlee-meet-integration.component.html',
  styleUrls: ['./googlee-meet-integration.component.scss']
})
export class GoogleeMeetIntegrationComponent{
  
constructor(private routes:Router){

}
 
openMeeting(){
  const meetingLink='https://meet.google.com/whv-wbdj-amf'
  this.routes.navigate(['/meeting',encodeURIComponent(meetingLink)]);
}
}
