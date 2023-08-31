import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NavBarService } from '../nav-bar.service';
@Component({
  selector: 'app-schedule-meet',
  templateUrl: './schedule-meet.component.html',
  styleUrls: ['./schedule-meet.component.scss']
})
export class ScheduleMeetComponent {
  MeetingSlots: string[] = ['15:35:10','16:40:10'];
res:any=[]

  public JobForm: FormGroup=this.formBuilder.group({
    Title:[''],
    MeetingSlots:  new FormControl(''),
    InterviewDate:new FormControl(''),
    InterviwerEmail:new FormControl(''),
    CandidateEmail:new FormControl('')
   })
 
   constructor(private formBuilder: FormBuilder,private service:NavBarService ){
  }
  selectedSlot: string=''
  onMeetingSlot(slot:any){
    this.selectedSlot=slot;
  }

  createReqObject=()=>{
    return{
      Title:this.JobForm.controls["Title"].value,
      type:2,
      //  Slots:this.MeetingSlots,
      //   Date:this.JobForm.controls["InterviewDate"].value,
        start_time:[this.selectedSlot,this.JobForm.controls["InterviewDate"].value],
        duration:"3",
        // InterviewMail:this.JobForm.controls["InterviwerEmail"].value,
        // CandidateMail:this.JobForm.controls["CandidateEmail"].value,
        settings:{"host_video":true,
        "participant_video":true,
        "join_before_host":true,
        "mute_upon_entry":"true",
        "watermark":"true",
        "audio":"voip",
        "auto_recording":"cloud"}

    }
  }
  onSubmit(){
    console.log(this.JobForm.value)
     this.res=this.createReqObject()
     console.log(this.res)
     this.service.getMeeting(this.res).subscribe((Response)=>{
      console.log(Response)
     })
 }
}
// createReqObject = () => {
//   if(this.isCheckboxChecked){
//     this.selectedExperience= this.JobForm.controls["CustomeStartDate"].value
//     this.selectedEndExperience=this.JobForm.controls["CustomeEndDate"].value
//   }
//   return {        
//     jobtitle:this.JobForm.controls["jobtitle"].value,
//     selectedSkills:this.skillsValue,
//     page: 1,
//     page_limit: 1000,
//     selectedExperiences: [+this.selectedExperience, +this.selectedEndExperience],
//     location:this.location,
//   }
// }