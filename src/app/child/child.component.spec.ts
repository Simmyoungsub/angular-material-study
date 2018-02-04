import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';
import {
  BsDatepickerConfig, BsDatepickerModule, BsLocaleService, ComponentLoaderFactory, DatepickerModule,
  PositioningService
} from 'ngx-bootstrap';
import {BrowserModule, By} from '@angular/platform-browser';
import {BsDatepickerContainerComponent} from 'ngx-bootstrap/datepicker/themes/bs/bs-datepicker-container.component';
import {BsDatepickerDirective} from 'ngx-bootstrap/datepicker';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from '../app.component';
import {CommonModule} from '@angular/common';
import {Browser} from 'selenium-webdriver';
import {BsDatepickerInputDirective} from 'ngx-bootstrap/datepicker/bs-datepicker-input.directive';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [
        ChildComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    // fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should be created date-picker', () => {
  //   component.bsValue = new Date();
  // });
});
