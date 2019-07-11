import {
  Component,
  NgZone,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  Input
} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as uuid from 'uuid';

am4core.useTheme(am4themes_animated);

interface ChartStyleOption {
  width?: string; // chart 컨테이너 width
  height?: string; // chart 컨테이너 height
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html'
})
export class ChartComponent implements AfterViewInit, OnDestroy {
  @Input() data: any[];
  @Input() style: ChartStyleOption = {
    width: '100%',
    height: '300px'
  };

  private chart: am4charts.XYChart = null;
  private chartUuid: string = null;

  private el: ElementRef;
  constructor(el: ElementRef) {
    this.el = el;
  }

  createUuid() {
    return uuid
      .v4()
      .toString()
      .replace(/-/gi, '');
  }

  bindChart(option: ChartStyleOption) {
    const {width, height} = option;
    this.chartUuid = this.createUuid();

    const chartDom = document.createElement('div');
    chartDom.id = this.chartUuid;
    chartDom.style.width = width;
    chartDom.style.height = height;

    this.el.nativeElement.appendChild(chartDom);
  }

  setChart(data: any[]) {
    // Create chart instance
    this.chart = am4core.create(this.chartUuid, am4charts.XYChart);

    // Add data
    this.chart.data = this.data;

    // Create axes
    const categoryAxis = this.chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'country';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    const valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    const series = this.chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'visits';
    series.dataFields.categoryX = 'country';
    series.name = 'Visits';
    series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]';
    series.columns.template.fillOpacity = 0.8;

    const columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
  }

  createChart(option?: any) {
    this.bindChart(this.style);
    this.setChart(this.data);
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}
