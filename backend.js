// Create an object
const playerData = [
    {
        "id": 0,
        "name": "Tim ",
        "juges": "91",
        "musicians": "92",
        "audience": "93",
        "total": "93"
    },
    {
        "id": 1,
        "name": "Mario",
        "juges": "94",
        "musicians": "95",
        "audience": "96",
        "total": "93"
    }

]
  // Store the object into storage
localStorage.setItem("playerData", JSON.stringify(playerData));
// const data = localStorage.getItem("playerData");
// console.log("data: ", JSON.parse(data));


function calculate() {
    var juges_final_score = 0
    var juges_score = document.getElementsByClassName("juges_score");
    for(let i = 0; i<juges_score.length;i++){
        juges_final_score =juges_final_score + parseInt(juges_score[i].value)
    }
    juges_final_score = juges_final_score / juges_score.length
    // calculate the juges_score

    var musicians_final_score = 0
    var musicians_score = document.getElementsByClassName("musicians_score");
    for(let j = 0; j<musicians_score.length;j++){
        musicians_final_score =musicians_final_score + parseInt(musicians_score[j].value)
    }
    musicians_final_score = musicians_final_score / musicians_score.length
    // calculate the musicians score

    var audience_score = document.getElementsByClassName("audience_score");
    var audience_final_score = audience_score[0].value
    // calculate the audience score

    document.getElementById("juges_score_label").innerHTML = juges_final_score;
    document.getElementById("musicians_score_label").innerHTML = musicians_final_score;
    document.getElementById("audience_score_label").innerHTML = audience_final_score;
    document.getElementById("final_score").innerHTML = audience_final_score/2 + musicians_final_score/4 + juges_final_score/4;  
}

function send_to_json() {
    const data = window.localStorage.getItem("playerData");
    var js_data = JSON.parse(data);
    for (var i = 0; i < js_data.length; i++) {
        if (js_data[i].id === 1) {
            js_data[i].total = "90";
            break;
        }
      }
    localStorage.clear()
    localStorage.setItem("playerData", JSON.stringify(js_data));
}

function display_data(){
    $("#tb1 td").remove();
    const data = window.localStorage.getItem("playerData");
    var js_data = JSON.parse(data);
    console.log(js_data);
}