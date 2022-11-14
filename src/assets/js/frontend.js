var student_data = ''

function get_data() {
  // console.log(json)
  student_data = localStorage.getItem("data");
  // xxxx = JSON.stringify(x)
  student_data = JSON.parse(student_data);
  console.log(student_data);
  // for (var i = 0; i < student_data.length; i++) {

  // }
  $('.student_name').each(function(i, obj) {
    $( this ).text(student_data[i].name)
    console.log(i+ $( this ).text() );
  });

  $('.second-score-card').each(function(i, obj) {
    $( this ).text(student_data[i].total)
    console.log(i+ $( this ).text() );
  });

  $("frist-card").hide();
}
