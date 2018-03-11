import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxEchartsModule} from 'ngx-echarts';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import {InputFormComponent} from './dialog/input-form/input-form.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatOptionModule, MatSelectModule, MatDialogModule } from '@angular/material';
import {ChildService} from './child/child.service';
import {ChartComponent} from './chart/chart.component';
import {ChartService} from './chart/chart.service';
import {FocusComponent} from './focus/focus.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    InputFormComponent,
    ChartComponent,
    FocusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxEchartsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    AgGridModule.withComponents({})
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule
  ],
  entryComponents: [
    InputFormComponent
  ],
  providers: [
    ChildService,
    ChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
