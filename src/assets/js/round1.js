function win(card) {
  $("." + card).addClass("win");
  $("." + card + " .btn").addClass("win-btn");
  $("." + card + " .card-img-top").addClass("win-img");
}
function lose(card) {
  $("." + card).addClass("lose");
}

function load_data() {
  student_data = localStorage.getItem("data");
  student_data = JSON.parse(student_data);
  console.log(student_data);

  $(".studentName").each(function (i, obj) {
    $(this).text(student_data[i].name);
  });

  $(".songName").each(function (i, obj) {
    $(this).text(student_data[i].song);
  });

  $(".score").each(function (i, obj) {
    $(this).text(student_data[i].total);
  });

  $(".card-img-top").each(function (i, obj) {
    $(this).attr("src", student_data[i].img);
  });

  student_data = JSON.stringify(student_data);
  localStorage.setItem("displayData", student_data);
}

function close_window(){
  window.close();
}

// Function to add or remove class based on key press
function handleKeyPress(event) {
    // player 1
    if (event.key === '1') { 
      // Add class when 'a' is pressed
      $("." + 'player-' + event.key).addClass("win");
      // $("." + 'player-1' + " .btn").addClass("win-btn");
      // $("." + 'player-1' + " .card-img-top").addClass("win-img");
      $("." + 'player-' + '2').addClass("lose");
    }// player 2
    else if (event.key === '2'){
       $("." + 'player-' + event.key).addClass("win");
       $("." + 'player-' + '1').addClass("lose");
    }// player 3
    else if (event.key === '3'){
       $("." + 'player-' + event.key).addClass("win");
       $("." + 'player-' + '4').addClass("lose");
    }// player 4
    else if (event.key === '4'){
       $("." + 'player-' + event.key).addClass("win");
       $("." + 'player-' + '3').addClass("lose");
    }// player 5
    else if (event.key === '5'){
       $("." + 'player-' + event.key).addClass("win");
       $("." + 'player-' + '6').addClass("lose");
    }// player 6
    else if (event.key === '6'){
       $("." + 'player-' + event.key).addClass("win");
       $("." + 'player-' + '5').addClass("lose");
    }// player 7
    else if (event.key === '7'){
       $("." + 'player-' + event.key).addClass("win");
       $("." + 'player-' + '8').addClass("lose");
    }// player 8
    else if (event.key === '8'){
       $("." + 'player-' + event.key).addClass("win");
       $("." + 'player-' + '7').addClass("lose");
    }// player 9
    else if (event.key === '9'){
       $("." + 'player-' + event.key).addClass("win");
       $("." + 'player-' + '10').addClass("lose");
    }// player 10
    else if (event.key === '0'){
       $("." + 'player-' + '10').addClass("win");
       $("." + 'player-' + '9').addClass("lose");
    }// reset 1 and 2
    else if (event.key === 'q'){
      $("." + 'player-' + '1').removeClass("win");
      $("." + 'player-' + '1').removeClass("lose");
      $("." + 'player-' + '2').removeClass("win");
      $("." + 'player-' + '2').removeClass("lose");
    }// reset 3 and 4
    else if (event.key === 'e'){
      $("." + 'player-' + '3').removeClass("win");
      $("." + 'player-' + '3').removeClass("lose");
      $("." + 'player-' + '4').removeClass("win");
      $("." + 'player-' + '4').removeClass("lose");
    }// reset 5 and 6
    else if (event.key === 't'){
      $("." + 'player-' + '5').removeClass("win");
      $("." + 'player-' + '5').removeClass("lose");
      $("." + 'player-' + '6').removeClass("win");
      $("." + 'player-' + '6').removeClass("lose");
    }// reset 7 and 8
    else if (event.key === 'u'){
      $("." + 'player-' + '7').removeClass("win");
      $("." + 'player-' + '7').removeClass("lose");
      $("." + 'player-' + '8').removeClass("win");
      $("." + 'player-' + '8').removeClass("lose");
    }// reset 9 and 10
    else if (event.key === 'o'){
      $("." + 'player-' + '9').removeClass("win");
      $("." + 'player-' + '9').removeClass("lose");
      $("." + 'player-' + '10').removeClass("win");
      $("." + 'player-' + '10').removeClass("lose");
    }
}

// Attach the event listener
document.addEventListener('keydown', handleKeyPress);
