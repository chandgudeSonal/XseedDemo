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

constructor(private service:NavBarService,private fb:FormBuilder){

}
firstFormGroup = this.fb.group({
  defaultComponent:['']
});
secondFormGroup = this.fb.group({
  defaultComponent:['']
});
ngOnInit() {
  this.defaultComponent = this.service.getDefaultWorkflow();
}
}
