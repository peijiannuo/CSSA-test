function load_data(){
    student_data = localStorage.getItem("newRanking");
    student_data = JSON.parse(student_data);
    console.log(student_data);
  
    $('.studentName').each(function(i, obj) {
      $( this ).text(student_data[i].name)
    });
  
    $('.songName').each(function(i, obj) {
      $( this ).text(student_data[i].song)
    });
  
    $('.score').each(function(i, obj) {
      $( this ).text(student_data[i].total)
    });

    $('.card-img-top').each(function(i, obj) {
      $( this ).attr('src',student_data[i].img);
    });
    
    student_data = JSON.stringify(student_data)
    localStorage.setItem("displayData", student_data);

}

function append_data(cardNumber){
  student_data = localStorage.getItem("newRanking");
  student_data = JSON.parse(student_data);
  console.log(student_data);

  $('.player-'+cardNumber+' .student_name').fadeOut(500, function() {
    $(this).text(student_data[cardNumber].name).fadeIn(500);
  }); 
  $('.player-'+cardNumber+' .song-name').fadeOut(500, function() {
    $(this).text(student_data[cardNumber].song).fadeIn(500);
  });
  $('.player-'+cardNumber+' .score').fadeOut(500, function() {
    $(this).text(student_data[cardNumber].total).fadeIn(500);
  });

  if (cardNumber == 1){
    window.open('/src/separateRankingPage/firstPlace.html', '_blank');
  }else if (cardNumber == 2) {
    window.open('/src/separateRankingPage/secondPlace.html', '_blank');
  }else if (cardNumber == 3) {
    window.open('/src/separateRankingPage/thirdPlace.html', '_blank');
  }else{

  }
  
}

function display(ranking){
    append_data(ranking)
    // console.log(ranking)
}