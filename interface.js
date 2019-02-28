// $(document).ready(function() {
// })
var datasets = [];
var data = [];
var index = 0;

var testsize = 50000;

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
          numberOfIterations * testsize,
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
        testsize * 1,
        testsize * 2,
        testsize * 3,
        testsize * 4,
        testsize * 5,
        testsize * 6,
        testsize * 7,
        testsize * 8,
        testsize * 9,
        testsize * 10,
        testsize * 11,
        testsize * 12,
        testsize * 13,
        testsize * 14,
        testsize * 15,
        testsize * 16,
        testsize * 17,
        testsize * 18,
        testsize * 19,
        testsize * 20
      ],
      datasets: datasets
    },
    options: {}
  });
}
