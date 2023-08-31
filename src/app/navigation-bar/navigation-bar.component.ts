import { Component } from '@angular/core';
import { NavBarService } from '../nav-bar.service';
import { FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  defaultComponent:any=[''];
  isEditable = false;
  // defaultComponentorigin = ['Create Job',  'Interview Schedule',  'closer'];
constructor(private service:NavBarService,private fb:FormBuilder){

}
navComponent = this.fb.group({
  defaultComponent:['']
});

ngOnInit() {

  this.defaultComponent = this.service.getDefaultWorkflow();
}
}
