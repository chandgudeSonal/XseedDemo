import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeetInfoComponent } from './meet-info/meet-info.component';
import { ScheduleMeetComponent } from './schedule-meet/schedule-meet.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { OrgWorkFlowComponent } from './org-work-flow/org-work-flow.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {MatStepperModule} from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MeetInfoComponent,
    ScheduleMeetComponent,
    OrgWorkFlowComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatNativeDateModule,
    DragDropModule,
    MatStepperModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
