<template>
  <canvas id="thisChart"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
var dates = [];
  for (var i = 0; i < 7; i++) {
    dates.push(`Day ${i}`);
  }
window.onload = (event) => {
  const ctx = document.getElementById("thisChart");
  const barChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: dates,
      datasets: [
        {
          label: "C02",
          data: [12, 19, 22, 11, 2, 4],
          backgroundColor: [
            "rgba(255,99,132,.7)",
            "rgba(54,162,235,.7)",
            "rgba(255,206,86,.7)",
            "rgba(75,192,192,.7)",
            "rgba(153,102,255,.7)",
            "rgba(255,159,64,.7)",
          ],
          borderColor: [
            "rgba(255,99,132,.7)",
            "rgba(54,162,235,.7)",
            "rgba(255,206,86,.7)",
            "rgba(75,192,192,.7)",
            "rgba(153,102,255,.7)",
            "rgba(255,159,64,.7)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  barChart;
};
</script>
