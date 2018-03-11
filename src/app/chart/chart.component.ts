import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ChartService} from './chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, AfterViewInit, OnDestroy{
  ec: any;
  chartOptions: any;
  updateOptions: any;

  constructor(
    private chartService: ChartService
  ) {

  }

  onChartInit(ec) {
    this.ec = ec;

    this.ec.on('brushselected', (
      (res) => {
        console.log(res);
      }
    ));
  }

  ngAfterViewInit(): void {

  }

  ngOnInit() {
    this.chartService.init();
    this.toggleOptions();
  }

  changeOptions() {
    this.updateOptions = this.getToggleOptions();
  }

  chartClick(params) {
    this.toggleOptions();
  }

  toggleOptions() {
    this.chartOptions = this.getToggleOptions();
  }

  getToggleOptions() {
    return this.chartService.getToggleOptions();
  }

  ngOnDestroy() {
    this.chartService.dispose();
  }
}
