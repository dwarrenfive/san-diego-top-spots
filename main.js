$(document).ready(function() {
  $.getJSON("data.json", function(json) {
    console.log(json);

    var data = `<tbody>`;
    for (var i = 0; i < json.length; i++) {
      data += `<tr>`;
      data += `<td> ${json[i].name} <td>`;
      data += `<td> ${json[i].description} <td>`;
      data += `<td> ${json[i].location} <td>`;
      data += `<tr>`;
    }
    data += `<tbody`;

    document.getElementById("button").onclick = function() {
      document.getElementById("showData").innerHTML = data;
    };
  });
});
