import {Component, OnInit} from '@angular/core';
import {MatDialogRef, MatFormFieldControl} from '@angular/material';
import {ChildService} from '../../child/child.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  item: any;
  times: any;
  selected: any;
  constructor(
    private childService: ChildService,
    public dialogRef: MatDialogRef<InputFormComponent>,
  ) {

  }

  ngOnInit(): void {
    this.item = {
      name: '홍길동',
      time: '08:30',
      age: 20
    };

    this.times = this.childService.getTimes();
    this.selected = this.item.time;
  }

  addItem() {
    // console.log(this.item);
    const obj = {
      name: this.item.name,
      time: this.item.time,
      age: this.item.age
    };

    this.dialogRef.close(obj);
  }
}
