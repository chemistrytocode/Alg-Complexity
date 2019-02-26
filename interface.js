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

      while (numberOfIterations <= 20) {
        var time = timeTesting(
          numberOfIterations * 5000,
          eval(colIdentifier),
          100
        );
        $(`#t${numberOfIterations}r1`).text(time);
        data.push(time);
        numberOfIterations++;
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
