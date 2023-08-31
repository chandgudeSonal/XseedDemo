import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgWorkFlowComponent } from './org-work-flow/org-work-flow.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { GoogleeMeetIntegrationComponent } from './googlee-meet-integration/googlee-meet-integration.component';
import { MeetingComponent } from './meeting/meeting.component';
const routes: Routes = [{ path: '', component: OrgWorkFlowComponent },
 { path: 'nav-page', component: NavigationBarComponent },
{path:'meeting/:link',component:MeetingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// { path: '', component: OrgWorkFlowComponent }
// {path:'',component:GoogleeMeetIntegrationComponent}