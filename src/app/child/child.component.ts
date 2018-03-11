import {Component, OnDestroy, OnInit} from '@angular/core';
import {GridOptions} from 'ag-grid';
import * as moment from 'moment';
import {ChildService} from './child.service';
import {Subscription} from 'rxjs/Subscription';
import {MatDialog} from '@angular/material';
import {InputFormComponent} from '../dialog/input-form/input-form.component';

@Component({
  selector: 'app-child',
  // templateUrl: './child.component.html',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
/**
 * 1. 셀 편집 -> 편집 후 콜백함수 호출 (완료)
 * 2. 셀렉트 박스 (완)
 * 3. 체크박스(완)
 * 4. angular material
 *  4-1. 팝업 (완)
 *  4-2. 폼 태그 (완)
 * 5. popup -> grid add data (완)
 * 6. 체크 박스와 셀렉션 분리([suppressRowClickSelection]="true") - 셀을 선택한다고해서 행 전체가 활성화 되는것은 안되게 함 (완)
 */
export class ChildComponent implements OnInit, OnDestroy {
  bsValue: Date;
  gridOptions: GridOptions;
  gridData: any;
  columnDefs: any;
  defaultColDef: any;
  private gridApi;
  private gridColumnApi;
  onDataChange: Subscription;

  constructor(private childService: ChildService, private dialog: MatDialog) { }

  ngOnInit() {
    this.bsValue = new Date();
    const colunms = [
      {
        headerName: '',
        field: 'chk',
        checkboxSelection: (
          (params) => {
            // console.log(params);
            // console.log(params.data);
            // console.log(params.data.state === 'wait');
            return params.data.state === 'wait';
          }
        ),
        width: 40
      },
      {
        headerName: 'name',
        field: 'name'
      },
      {
        headerName: 'time',
        field: 'time',
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: {
          values: this.childService.getTimes()
        }
      },
      {
        headerName: 'age',
        field: 'age',
        cellEditor: 'agPopupTextCellEditor'
      },
      {
        headerName: 'state',
        field: 'state',
      }
    ];
    this.columnDefs = colunms;

    this.gridData = [
      {
        'name': '홍길동',
        'time': '08:30',
        'age': 10,
        'state': 'wait'
      },
      {
        'name': '홍길동',
        'time': '08:30',
        'age': 10,
        'state': 'wait'
      },
      {
        'name': '홍길동',
        'time': '08:30',
        'age': 10,
        'state': 'wait'
      },
      {
        'name': '둘리',
        'time': '08:30',
        'age': 5,
        'state': 'success'
      }
    ];
    this.defaultColDef = { editable: true };
    // this.pinnedBottomRowData = getPinnedBottomData();

    this.onDataChange =
      this.childService
          .onDataChange
          .subscribe(
            (res: any) => {
              console.log(res);
              this.addRow(res);
            }
          );
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  cellValueChanged(event) {
    console.log('call update');
    console.log('cellValueChanged', event);
    // const changeRow = event.data;
    // console.log(changeRow); // 서버로 올려줄 값, row 데이터를 통째로 올려주던지 or 원하는 데이터만 올려주던지
  }

  rowValueChanged(event) {
    console.log('rowValueChanged', event);
  }

  addRow(data) {
    this.gridApi.updateRowData({add: [data]});
  }

  createRowData() {
    return {
      name: '최길동',
      age: 30
    };
  }

  getSelectionRows() {
    console.log(this.gridApi);
    const rows = this.gridApi.getSelectedRows();
    console.log(rows);
  }

  openDialog() {
    const dialogRef = this.dialog.open(InputFormComponent, {
      width: '100%'
    });

    dialogRef.afterClosed().subscribe(
      (res: any) => {
        console.log('call create');
        console.log(res);
        this.childService.addItem(res);
      }
    );
  }

  deleteRows() {
    console.log('call delete');
    this.getSelectionRows();
  }

  rowSelected(event) {
    if(event.node.isSelected()) {
      console.log('rowSelected', event);
      if(event.data.state !== 'wait') {
        event.node.setSelected(false, false);
      }
    }
  }

  selectionChanged(event) {
    // console.log('selectionChanged', event);
  }

  ngOnDestroy() {
    this.onDataChange.unsubscribe();
  }
}
