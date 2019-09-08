$(document).ready(function() {
  $.getJSON("data.json", function(json) {
    // console.log(json);

    var data = `<tbody>`;
    for (var i = 0; i < json.length; i++) {
      data += `<tr>`;
      data += `<td> ${json[i].name} <td>`;
      data += `<td> ${json[i].description} <td>`;
      data += `<td><a href='https://www.google.com/maps?q=${json[i].location}'>
      <img src="maps-icon.png" style="width:62px;height:62px;border:0;"><td>`;
      data += `<tr>`;
    }
    data += `<tbody`;

    document.getElementById("button").onclick = function() {
      document.getElementById("showData").innerHTML = data;
    };
  });
});
