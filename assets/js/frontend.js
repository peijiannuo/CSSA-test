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

function refresh_data(){
// 对应排名填入对应的数据
}

function position(){
  var updated_id = localStorage.getItem("updated_id")
  var display_data = JSON.parse(localStorage.getItem("displayData"))
  var newRanking = JSON.parse(localStorage.getItem("newRanking"))
  for (var i = 0; i < display_data.length; i++){
    if (display_data[i].id == updated_id){
      ranking = display_data[i].ranking
    }
    if (newRanking[i].id == updated_id){
      curRanking = newRanking[i].ranking
    }
  }
  listsize = ranking - curRanking
  let moveDownList = [];

  for (i=0;i<listsize;i++){
    moveDownList.push(i+curRanking)
  }

  console.log(updated_id,moveDownList,curRanking)
  swap(updated_id,moveDownList,curRanking)

}



function swap(moveUpCard,list,newMoveUpId){
  var n = list.length
  if (n==0){
    console.log("x")
  }else{
    var moveUpPx = "-="+n*88
    var moveDownPx = "+="+88
    $('#'+moveUpCard).animate({
      top: moveUpPx,
      // height: "toggle"
    }, 1000, function() {
      // Animation complete.
    });
    $('#'+moveUpCard).attr('id',-1)

    for (var i = 0; i < list.length; i++) {
      var moveDownCard = list[i]
      $('#'+moveDownCard).animate({
        top: moveDownPx,
        // height: "toggle"
      }, 1000, function() {
        // Animation complete.
      });
    }

    for(var i = list.length - 1; i >= 0; i--){
      var moveDownCard1 = list[i]
      var newMoveDownID = list[i]+1
      $('#'+moveDownCard1).attr('id',newMoveDownID);
    }

    $('#'+-1).attr('id',newMoveUpId)    
  }


}


function movetest(){

  $(".first-card").addClass("win")

}

