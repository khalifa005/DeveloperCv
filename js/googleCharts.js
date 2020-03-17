google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['js', 8],
    ['core', 2],
    ['mvc', 4],
    ['api', 2],
    ['postgres', 8]
  ]);

  var options = {
    'title': '',
    'width': 550,
    'height': 400
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}