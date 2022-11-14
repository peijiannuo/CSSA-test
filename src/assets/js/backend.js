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
  document.getElementById("selected-name-id").innerHTML = selectedId;
  document.getElementById("selected-name").innerHTML = name;
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
  document.getElementById("final_score").innerHTML = parseFloat(
    audience_final_score / 2 +
    musicians_final_score / 2 +
    juges_final_score / 6    
  ).toFixed(2);
}

function load_local() {
  id_selected = parseInt($("#selected-name-id").text());
  var student_data = localStorage.getItem("data")
  student_data = JSON.parse(json1)
  for (var i = 0; i < student_data.length; i++) {
    if (student_data[i].id === id_selected) {
      student_data[i].juges = $("#juges_score_label").text();
      student_data[i].musicians = $("#musicians_score_label").text();
      student_data[i].audience = $("#audience_score_label").text();
      student_data[i].total = $("#final_score").text();
      break;
    }
  }

  var student = "";
  for (var i = 0; i < student_data.length; i++) {
    // DATA FROM JSON OBJECT
    student += "<tr>";
    student += "<td>" + student_data[i].id + "</td>";

    student += "<td>" + student_data[i].name + "</td>";

    student += "<td>" + student_data[i].juges + "</td>";

    student += "<td>" + student_data[i].musicians + "</td>";

    student += "<td>" + student_data[i].audience + "</td>";

    student += "<td>" + student_data[i].total + "</td>";

    student += "</tr>";
  }
  $("#tb1 td").remove();
  $("#tb1").append(student);

  student_data = JSON.stringify(student_data)
  localStorage.setItem("data", student_data);

}

function display_data() {
  $("#tb1 td").remove();
  fetch("./assets/js/mydata.json")
    .then((res) => res.json()) // the .json() method parses the JSON response into a JS object literal
    .then((data) => {
      // conevert to string
      json1 = JSON.stringify(data);
      // conevert to object
      // json_student = JSON.parse(json1);
      localStorage.setItem("data", json1);
      window.location.herf = "./src/index.html";

      var student = "";
      for (var i = 0; i < data.length; i++) {
        // DATA FROM JSON OBJECT
        student += "<tr>";
        student += "<td>" + data[i].id + "</td>";
    
        student += "<td>" + data[i].name + "</td>";
    
        student += "<td>" + data[i].juges + "</td>";
    
        student += "<td>" + data[i].musicians + "</td>";
    
        student += "<td>" + data[i].audience + "</td>";
    
        student += "<td>" + data[i].total + "</td>";
    
        student += "</tr>";
      }
      $("#tb1 td").remove();
      $("#tb1").append(student);

    });

}
