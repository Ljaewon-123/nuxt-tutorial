<template>
  <div>
		<div class="financial" ref="financial"></div>
	</div>
</template>

<script setup lang="ts">
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


const financial = ref<HTMLDivElement>()

onMounted(() => {
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
const chart = am4core.create(financial.value, am4charts.XYChart);

// Add data
chart.data = [ 
  {
  "year": "2003",
  "europe": 2.5,
  "namerica": 2.5,
  "asia": 2.1,
  "lamerica": 1.2,
  "meast": 0.2,
  "africa": 0.1
  }, 
  {
    "year": "2004",
    "europe": 2.6,
    "namerica": 2.7,
    "asia": 2.2,
    "lamerica": 1.3,
    "meast": 0.3,
    "africa": 0.1
  }, 
  {
    "year": "2005",
    "europe": 2.8,
    "namerica": 2.9,
    "asia": 2.4,
    "lamerica": 1.4,
    "meast": 0.3,
    "africa": 0.1
  } 
]

// Create axes
const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
// categoryAxis.title.text = "Local country offices";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;
categoryAxis.renderer.labels.template.fill = am4core.color("#AFC5D2");

const valueYAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueYAxis.min = 0;
valueYAxis.title.text = "Expenditure (M)";
valueYAxis.numberFormatter = new am4core.NumberFormatter()
valueYAxis.numberFormatter.numberFormat = "#.##' $'";
valueYAxis.renderer.labels.template.fill = am4core.color("#AFC5D2");
valueYAxis.title.fill = am4core.color("#AFC5D2")

const secondYAxis = chart.yAxes.push(new am4charts.ValueAxis());
secondYAxis.title.text = "kWh";
secondYAxis.renderer.grid.template.disabled = true;
secondYAxis.renderer.opposite = true;
secondYAxis.numberFormatter.numberFormat = "#.##";
secondYAxis.renderer.labels.template.fill = am4core.color("#AFC5D2");
secondYAxis.title.fill = am4core.color("#AFC5D2") // 제목만 색변경


// latitudeAxis.renderer.grid.template.disabled = true;
// latitudeAxis.renderer.labels.template.disabled = true;

// Create series
function createSeries(field: string | undefined, name: string, stacked: boolean) {
  const series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = field;
  series.dataFields.categoryX = "year";
  // series.yAxis = valueYAxis
  series.name = name;
  series.tooltipText = "{name}: [bold]{valueY}[/]";
  series.stacked = stacked;
  series.columns.template.width = am4core.percent(95);
}

createSeries("europe", "Europe", false);
createSeries("namerica", "North America", true);
createSeries("asia", "Asia", false);


const latitudeSeries = chart.series.push(new am4charts.LineSeries());
latitudeSeries.dataFields.valueY = "lamerica";
latitudeSeries.dataFields.categoryX = "year";
latitudeSeries.yAxis = secondYAxis;
latitudeSeries.name = "lamerica";
latitudeSeries.strokeWidth = 2;
latitudeSeries.fillOpacity = 0.5
latitudeSeries.propertyFields.strokeDasharray = "dashLength";
latitudeSeries.tooltipText = "{valueY} %";
latitudeSeries.showOnInit = true;




// Add legend
chart.legend = new am4charts.Legend();
chart.legend.labels.template.fill = am4core.color("#AFC5D2")

chart.cursor = new am4charts.XYCursor();

am4core.options.autoDispose = true;
})

</script>

<style scoped>
.financial{
  /* width: 500px; */
  height: 100%;
  min-height: 800px;
}
</style>