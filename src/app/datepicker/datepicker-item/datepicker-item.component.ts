import {Component, HostListener, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material';
import {Moment} from 'moment';
import {MyMomentAdapter} from '../myAdatpter';
import {FormControl} from '@angular/forms';
import {MY_FORMAT} from '../myformat';
import * as moment from 'moment';

@Component({
  selector: 'datepicker-item',
  templateUrl: './datepicker-item.component.html',
  providers: [
    {provide: DateAdapter, useClass: MyMomentAdapter},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMAT }
  ]
})

export class DatepickerItemComponent implements OnInit {
  date: FormControl;
  d: string;
  validator: any;

  constructor(private adapter: DateAdapter<Moment>) {
    const mma = this.adapter as MyMomentAdapter;
    this.validator = mma.validator;
  }

  ngOnInit(): void {
    this.date = new FormControl(moment());
  }

  onClick(params, input) {
    const a = this.adapter as MyMomentAdapter;
  }
}
