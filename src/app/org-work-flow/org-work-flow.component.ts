import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarService } from '../nav-bar.service';
@Component({
  selector: 'app-org-work-flow',
  templateUrl: './org-work-flow.component.html',
  styleUrls: ['./org-work-flow.component.scss']
})
export class OrgWorkFlowComponent implements OnInit {
  componentOptions = [ 'Create Team ','Post on social media','Share To client', 'Document verification'];

  defaultComponent = ['Create Job',  'Interview Schedule',  'closer'];
  constructor(private router:Router,private service:NavBarService){

  }
  ngOnInit() {
    this.service.setDefaultWorkflow(this.defaultComponent);

  }

  drop(event: CdkDragDrop<string[]>) {
    // if(this.defaultComponent==this.defaultComponentorigin){
    //   this.service.setDefaultWorkflow(this.defaultComponent);
    //   console.log(this.defaultComponent)
    // }
    //  if(!event){
    //   this.service.setDefaultWorkflow(this.defaultComponent);
    //   console.log(event)

    //  }
    // if (event.previousIndex === event.currentIndex) {
    //   this.service.setDefaultWorkflow(this.defaultComponent);
    // }
     if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.service.setDefaultWorkflow(this.defaultComponent);
      console.log(this.componentOptions);
      console.log(this.defaultComponent)
      console.log(event.previousContainer)
      console.log(event.container)
    }
  
     else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,

      );
      // console.log(this.componentOptions);
      // console.log(this.defaultComponent)
      this.service.setDefaultWorkflow(this.defaultComponent);
    }
 
 

  }
  goToNavBar() {
    this.router.navigate(['/nav-page']); 
    const updatedDefaultWorkflow = this.service.getDefaultWorkflow();
  }
}
