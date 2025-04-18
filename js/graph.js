var xValues = ["HTML", "CSS", "Bootstrap", "SASS", "JavaScript", "Node", "React", "MongoDB", "DSA", "Microservice"];
var yValues = [100, 98, 90, 98, 80, 50, 80, 0, 0, 0];
var barColors = [
  "#FF4B00",
  "#2196F3",
  "#5E3B7F",
  "#CC6699",
  "#FFDF00",
  "#56A445",
  "#0DCAF0",
  "#482526",
  "#482526",
  "#482526"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "My Tech Skillset"
    }
  }
});