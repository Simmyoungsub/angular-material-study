import * as moment from 'moment';
import {Moment} from 'moment';
import {MomentDateAdapter} from '@angular/material-moment-adapter';

export class MyMomentAdapter extends MomentDateAdapter {
  private error = false;
  validator: any;

  constructor() {
    super('ko');
    this.validator = this.isError;
  }

  format(date: Moment, displayFormat: string): string {
    if ( displayFormat === 'input' ) {
      return moment(date).format('YYYY-MM-DD');
    }

    return moment(date).format('YYYY-MM-DD');
  }

  parse(value: any, parseFormat: string | string[]): Moment | null {
    if ( value.length !== 10 ) {
      return moment(NaN);
    }

    if ( typeof value === 'string' && !value.match(/\d\d\d\d-\d\d-\d\d/g) ) {
      return moment(NaN);
    }

    return null;
  }

  isValid(date: Moment): boolean {
    if ( date.isValid() ) {
      this.error = false;
      return true;
    }else {
      this.error = true;
      return false;
    }
  }

  public isError() {
    return this.error;
  }
}
