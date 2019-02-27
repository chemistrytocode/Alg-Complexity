// $(document).ready(function() {
// })
var datasets = [];
var data = [];
var index = 0;

function returnId(id) {
  var type = id;
  generateResults();

  function generateResults() {
    $("#colName").text(type);
    populateDataArray();

    function populateDataArray() {
      var numberOfIterations = 1;
      var colIdentifier = type;
      var colors = [
        "rgba(83, 51, 237, 1)",
        "rgba(219, 10, 91, 1)",
        "rgba(38, 194, 129, 1)"
      ];

      while (numberOfIterations <= 20) {
        var time = timeTesting(
          numberOfIterations * 500,
          eval(colIdentifier),
          100
        );
        $(`#t${numberOfIterations}r1`).text(time);
        data.push(time);
        numberOfIterations++;
      }
      dataset = createDataset();
      datasets.push(dataset);
      reset();

      function reset() {
        index === colors.length - 1 ? (index = 0) : index++;
        data = [];
      }

      function randomColor() {
        return colors[index];
      }

      function createDataset() {
        return {
          label: type,
          borderColor: randomColor(),
          fill: false,
          data: data
        };
      }
    }
  }

  var ctx = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "5000",
        "10000",
        "15000",
        "20000",
        "25000",
        "30000",
        "35000",
        "40000",
        "45000",
        "50000",
        "55000",
        "60000",
        "65000",
        "70000",
        "75000",
        "80000",
        "85000",
        "90000",
        "95000",
        "100000"
      ],
      datasets: datasets
    },
    options: {}
  });
}
