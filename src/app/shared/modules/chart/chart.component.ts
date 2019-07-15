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

  private chart: any = null;
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
    am4core.options.commercialLicense = true;
    this.chart = am4core.createFromConfig(
      data,
      this.chartUuid,
      am4charts.XYChart
    );

    // Create chart instance
    // this.chart = am4core.create(this.chartUuid, am4charts.XYChart);

    // Add data
    // this.chart.data = this.data;

    // Create axes
    // const categoryAxis: any = this.chart.xAxes.push(
    //   new am4charts.CategoryAxis()
    // );
    // categoryAxis.dataFields.category = 'country';
    // categoryAxis.renderer.grid.template.location = 0;
    // categoryAxis.renderer.minGridDistance = 30;
    // categoryAxis.extraMin = 0.2;
    // categoryAxis.extraMax = 0.2;

    // const valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    // const series = this.chart.series.push(new am4charts.ColumnSeries());
    // series.dataFields.valueY = 'visits';
    // series.dataFields.categoryX = 'country';
    // series.name = 'Visits';
    // series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/]';
    // series.columns.template.fillOpacity = 0.8;
    // series.columns.template.fill = am4core.color('#33a0ff');

    // const columnTemplate = series.columns.template;
    // columnTemplate.strokeWidth = 2;
    // columnTemplate.strokeOpacity = 1;

    // const topContainer = this.chart.chartContainer.createChild(
    //   am4core.Container
    // );
    // topContainer.layout = 'absolute';
    // topContainer.toBack();
    // topContainer.paddingBottom = 15;
    // topContainer.width = am4core.percent(100);

    // const axisTitle: any = topContainer.createChild(am4core.Label);
    // axisTitle.text = '(시간)';
    // axisTitle.fontWeight = 600;
    // axisTitle.fontSize = 15;
    // axisTitle.align = 'left';
    // axisTitle.fill = '#999';
    // axisTitle.paddingLeft = 5;

    // const label: any = this.chart.chartContainer.createChild(am4core.Label);
    // label.text = '(일)';
    // label.fontWeight = 600;
    // label.align = 'right';
    // label.marginTop = -10;
    // label.marginRight = -5;
    // label.fontSize = 15;
    // label.fill = '#999';
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
