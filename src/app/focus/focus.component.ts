import {AfterViewInit, Component, OnDestroy, OnInit, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.scss']
})
export class FocusComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren('pop') popup: any;
  isShow: boolean;
  isClose: boolean;
  divFocus: boolean;
  childFocus: boolean;

  constructor() {

  }

  ngOnInit(): void {
    this.isShow = false;
    this.divFocus = false;
    this.isClose = true;
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  onShow() {
    console.log('onShown');
    this.isShow = true;
    this.isClose = false;

  }

  onHide() {
    setTimeout(
      () => {
        if ( this.divFocus ) {
          this.isClose = false;
        }else {
          this.isClose = true;
        }

        this.isShow = false;
      }, 100
    );
  }

  onClose() {
    this.isClose = true;
    this.divFocus = false;
  }

  focusin() {
    this.divFocus = true;
  }

  /**
   * default value
   * f f t
   * f f t
   */
  toggle() {
    this.isShow = !this.isShow;
    this.isClose = !this.isClose;
  }

  gett() {
    return this.isShow || !this.isClose;
  }
}
