import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarService } from '../nav-bar.service';
@Component({
  selector: 'app-org-work-flow',
  templateUrl: './org-work-flow.component.html',
  styleUrls: ['./org-work-flow.component.scss']
})
export class OrgWorkFlowComponent {
  componentOptions = [ 'Create Team ','Post on social media', 'Interview Schedule','Share To client', 'Document verification'];

  defaultComponent = ['Create Job',  'Interview Schedule',  'closer'];
  constructor(private router:Router,private service:NavBarService){

  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,

      );
      console.log(this.componentOptions);
      console.log(this.defaultComponent)
      this.service.setDefaultWorkflow(this.defaultComponent);
    }
  }
  goToNavBar() {
    this.router.navigate(['/nav-page']); 
    const updatedDefaultWorkflow = this.service.getDefaultWorkflow();
  }
}
