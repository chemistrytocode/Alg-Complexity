// $(document).ready(function() {
// })

function returnId(id) {
  var type = id
  generateResults()

  function generateResults() {
    var data = [];
    $("#colName").text(type)
    populateDataArray()

    function populateDataArray() {
      var numberOfIterations = 1;
      var colIdentifier = type

      while (numberOfIterations <= 10) {
        var test = timeTesting(
          numberOfIterations * 50000,
          eval(colIdentifier),
          100
        );
        $(`#t${numberOfIterations}r1`).text(test);
        data.push(test);
        numberOfIterations++;
      }
    }

  var ctx = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "50000",
        "100000",
        "150000",
        "200000",
        "250000",
        "300000",
        "350000",
        "400000",
        "450000",
        "500000"
      ],
      datasets: [
        {
          label: type,
          borderColor: "rgb(255, 99, 132)",
          data: data
        }
      ]
    },
    options: {}
  });
  }

}
