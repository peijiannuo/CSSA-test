var student_data = ''

function get_data() {


  student_data = localStorage.getItem("newRanking");
  student_data = JSON.parse(student_data);
  console.log(student_data);

  $('.student_name').each(function(i, obj) {
    $( this ).text(student_data[i].name)
  });

  $('.song-name').each(function(i, obj) {
    $( this ).text(student_data[i].song)
  });

  $('.score').each(function(i, obj) {
    $( this ).text(student_data[i].total)
  });

  $('.col-12').each(function(i, obj) {
    $( this ).attr('id',i);
  });
  
  student_data = JSON.stringify(student_data)
  localStorage.setItem("displayData", student_data);

}



function swap(){
  var moveUpCard = 2
  var list = [0,1]
  var newMoveUpId = 0
  $('#'+moveUpCard).animate({
    bottom: "+=176",
    // height: "toggle"
  }, 1000, function() {
    // Animation complete.
  });
  $('#'+moveUpCard).attr('id',newMoveUpId)

  for (var i = 0; i < list.length; i++) {
    var moveDownCard = i
    $('#'+moveDownCard).animate({
      top: "+=88",
      // height: "toggle"
    }, 1000, function() {
      // Animation complete.
    });
  }
  for (var i = 0; i < list.length; i++) {
    var moveDownCard = i
    $('#'+moveDownCard).attr('id',(i+1));
  }

}
