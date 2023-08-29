import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgWorkFlowComponent } from './org-work-flow/org-work-flow.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
const routes: Routes = [ { path: '', component: OrgWorkFlowComponent },
{ path: 'nav-page', component: NavigationBarComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
