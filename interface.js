var type = ""
var numberOfIterations = 1;


$(document).ready(function() {
})

function returnId(id) {
  type = id

  generateResults(id)

  function generateResults(id) {
    var data = [];
    $("#colName").text(type)
    var colIdentifier = id
    console.log(colIdentifier)

    var colName = $("#colName");
    // var colIdentifier = colName.text();

    while (numberOfIterations <= 10) {
      var test = timeTesting(
        numberOfIterations * 50000,
        eval(colIdentifier.toLowerCase()),
        100
      );
      $(`#t${numberOfIterations}r1`).text(test);
      data.push(test);
      numberOfIterations++;
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
