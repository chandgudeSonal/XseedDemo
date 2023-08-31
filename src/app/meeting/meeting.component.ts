import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit{
  meetingLink:any;
  constructor(private route:ActivatedRoute,private sanitizer:DomSanitizer){

  }
  ngOnInit() {
   this.route.params.subscribe(params =>{
    this.meetingLink=decodeURIComponent(params['link']);
    
   })
  
  
    let url = 'https://meet.jit.si/casualparticipationsstorequite';
    this.meetingLink = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.sanitizer.bypassSecurityTrustResourceUrl(url));
  }
  

}
