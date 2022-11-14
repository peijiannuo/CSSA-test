var json = "";

function select_name(name) {
  localData = localStorage.getItem("data");
  localData = JSON.parse(localData);
  selectedid = 0;
  for (var i = 0; i < localData.length; i++) {
    if (name == localData[i].name) {
      console.log(localData[i].id);
      selectedId = localData[i].id;
    }
  }
  document.getElementById("selected-name").innerHTML = selectedId;
}

function calculate() {
  var juges_final_score = 0;
  var juges_score = document.getElementsByClassName("juges_score");
  for (let i = 0; i < juges_score.length; i++) {
    juges_final_score = juges_final_score + parseInt(juges_score[i].value);
  }
  juges_final_score = juges_final_score / juges_score.length;
  // calculate the juges_score

  var musicians_final_score = 0;
  var musicians_score = document.getElementsByClassName("musicians_score");
  for (let j = 0; j < musicians_score.length; j++) {
    musicians_final_score =
      musicians_final_score + parseInt(musicians_score[j].value);
  }
  musicians_final_score = musicians_final_score / musicians_score.length;
  // calculate the musicians score

  var audience_score = document.getElementsByClassName("audience_score");
  var audience_final_score = audience_score[0].value;
  // calculate the audience score

  document.getElementById("juges_score_label").innerHTML = juges_final_score;
  document.getElementById("musicians_score_label").innerHTML =
    musicians_final_score;
  document.getElementById("audience_score_label").innerHTML =
    audience_final_score;
  document.getElementById("final_score").innerHTML =
    audience_final_score / 2 +
    musicians_final_score / 2 +
    juges_final_score / 6;
}

function send_to_json() {
  student = "";
  id_selected = parseInt($("#selected-name").text());
  console.log(id_selected);
  for (var i = 0; i < json.length; i++) {
    if (json[i].id === id_selected) {
      json[i].total = $("#final_score").text();
      break;
    }
  }
}

function load_local() {
  localData = localStorage.getItem("data");
  localData = JSON.parse(localData);
  var student = "";
  for (var i = 0; i < localData.length; i++) {
    // DATA FROM JSON OBJECT
    student += "<tr>";
    student += "<td>" + json[i].id + "</td>";

    student += "<td>" + json[i].name + "</td>";

    student += "<td>" + json[i].juges + "</td>";

    student += "<td>" + json[i].musicians + "</td>";

    student += "<td>" + json[i].audience + "</td>";

    student += "<td>" + json[i].total + "</td>";

    student += "</tr>";
  }
  $("#tb1 td").remove();
  $("#tb1").append(student);
}

function display_data() {
  $("#tb1 td").remove();
  fetch("mydata.json")
    .then((res) => res.json()) // the .json() method parses the JSON response into a JS object literal
    .then((data) => {
      console.log(data);
      // window.localStorage.setItem("json", JSON.stringify(data));
      json1 = JSON.stringify(data);
      json = JSON.parse(json1);
      console.log(typeof json);
      localStorage.setItem("data", json1);
      window.location.herf = "index.html";
    });

  // FETCHING DATA FROM JSON FILE
  $.getJSON("mydata.json", function (data) {
    var student = "";

    // ITERATING THROUGH OBJECTS
    $.each(data, function (key, value) {
      // DATA FROM JSON OBJECT
      student += "<tr>";
      student += "<td>" + value.id + "</td>";

      student += "<td>" + value.name + "</td>";

      student += "<td>" + value.juges + "</td>";

      student += "<td>" + value.musicians + "</td>";

      student += "<td>" + value.audience + "</td>";

      student += "<td>" + value.total + "</td>";

      student += "</tr>";
    });

    //INSERTING ROWS INTO TABLE
    $("#tb1").append(student);
  });
}