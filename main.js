$(document).ready(function() {
  $.getJSON("data.json", function(json) {
    // console.log(json);

    /* jsonData.getString("name");
  jsonData.getString("description");
  jsonData.getString("location"); */

    // var hotSpots = getJSON("data.json");

    var table = document.getElementById("table");

    var tr = table.insertRow(-1);

    for (var i = 0; i < json.length; i++) {
      tr = table.insertRow(-1);
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = json[i];
    }

    /* var divContainer = document.getElementById("table");
    divContainer.innerHTML = "";
    divContainer.appendChild(table); */
  });
});

/* function handleClickEvent() {
  return $(document);
} */
