<template>
  <q-page class="flex">
    <div class="q-pa-md">
      <div class="row q-col-gutter-md">
        <div class="col q-pa-md">
          <barChart
            :data="chartData"
            :options="options"
            :theme="theme"
          ></barChart>
        </div>
        <div class="col q-pa-md">
          <lineChart
            :data="chartData"
            :options="options"
            :theme="theme"
          ></lineChart>
        </div>
      </div>

      <div class="row q-col-gutter-md">
        <div class="col">
          <columnChart
            :data="chartData"
            :options="options"
            :theme="theme"
          ></columnChart>
        </div>
        <div class="col">
          <radialChart
            :data="chartData"
            :options="options"
            :theme="theme"
          ></radialChart>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import "tui-chart/dist/tui-chart.css";
import {
  barChart,
  lineChart,
  columnChart,
  radialChart
} from "@toast-ui/vue-chart";
export default {
  name: "Statistics",
  components: {
    barChart,
    lineChart,
    columnChart,
    radialChart
  },
  data() {
    return {
      theme: {
        series: {
          colors: ["#83b14e", "#458a3f", "#295ba0", "#2a4175"]
        }
      },
      options: {
        chart: {
          width: 800,
          height: 400,
          title: "Leistungstrend"
        },
        yAxis: {
          title: "Anzahl"
        },
        xAxis: {
          title: "Jahr",
          pointOnColumn: true,
          dateFormat: "YYYY",
          tickInterval: "auto"
        },
        series: {
          showDot: true,
          zoomable: true
        },
        tooltip: {
          suffix: ""
        },
        plot: {
          bands: [
            {
              range: ["2018", "2020"],
              color: "gray",
              opacity: 0.2
            }
          ],
          lines: [
            {
              value: "03/01/2016",
              color: "#fa2828"
            }
          ]
        }
      },
      chartData: {
        categories: ["2018", "2019", "2020"],
        series: [
          {
            name: "Spiele",
            data: [25, 34, 28]
          },
          {
            name: "Siege",
            data: [20, 12, 7]
          },
          {
            name: "Niederlagen",
            data: [5, 22, 21]
          },
          {
            name: "Torverhältnis",
            data: [23, -45, -10]
          }
        ]
      }
    };
  }
};
</script>
