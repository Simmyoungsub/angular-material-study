import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS} from "@angular/material";
import {MyMomentAdapter} from './myAdatpter';
import {MY_FORMAT} from './myformat';
import {Moment} from 'moment';

@Component({
  selector: 'sample-datepicker',
  templateUrl: './datepicker.component.html',
  providers: [
    {provide: DateAdapter, useClass: MyMomentAdapter},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMAT }
  ]
})
export class DatepickerComponent implements OnInit {

  constructor(private adapter: DateAdapter<Moment>) {

  }

  ngOnInit(): void {
  }

}
