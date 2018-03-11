import {Injectable} from '@angular/core';

@Injectable()
export class ChartService {
  mode: string;

  init() {
    this.mode = 'single';
  }

  getToggleOptions() {
    const mode = this.mode;

    switch(mode) {
      case 'single':
        this.mode = 'double';
        return {
          'title': {
            'text': 'hello'
          },
          'tooltip': {
            type: 'axis'
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: false
              },
              brush: {
                type: ['lineX', 'clear']
              }
            }
          },
          brush: {
            xAxisIndex: 'all',
            brushLink: 'all',
            outOfBrush: {
              colorAlpha: 0.1
            }
          },
          'xAxis': [
            {
              'type': 'category',
              'data': this.getCategory()
            }
          ],
          'yAxis': [
            {
              'type': 'value'
            }
          ],
          series: [
            {
              type: 'scatter',
              data: [1, 2, 3]
            }
          ]
        };
      case 'double':
        this.mode = 'single';
        return {
          'title': {
            'text': 'hello'
          },
          grid: [
            {left: 0, width: '50%'},
            {left: '52%', width: '50%'}
          ],
          'toolbox': {
            'show': true,
            'feature': {
              'brush': {
                type: 'rect'
              }
            }
          },
          'xAxis': [
            {
              'type': 'category',
              'data': this.getCategory(),
              gridIndex: 0
            },
            {
              'type': 'category',
              'data': this.getCategory(),
              gridIndex: 1
            }
          ],
          'yAxis': [
            {
              'type': 'value',
              gridIndex: 0
            },
            {
              'type': 'value',
              gridIndex: 1
            }
          ],
          series: [
            {
              type: 'bar',
              data: [1, 2, 3],
              xAxisIndex: 0,
              yAxisIndex: 0
            },
            {
              type: 'line',
              data: [1, 2, 3],
              xAxisIndex: 1,
              yAxisIndex: 1
            }
          ]
        };
    }
  }

  getCategory() {
    return ['apple', 'banana', 'car'];
  }

  dispose() {

  }
}
