import { Injectable } from '@angular/core';
import * as moment from 'moment';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ChildService {
  onDataChange: Subject<any> = new Subject<any>();
  constructor() {

  }

  addItem(obj) {
    this.onDataChange.next(obj);
  }

  getTimes() {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    let s = start.getTime();
    const e = end.getTime();
    const interval = 30 * 60 * 1000;
    const array = [];

    for ( ; s < e ; ) {
      array.push(moment(s).format('HH:mm'));
      s += interval;
    }
    return array;
  }
}
