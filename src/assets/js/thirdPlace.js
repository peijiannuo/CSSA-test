function load_data(){
    student_data = localStorage.getItem("newRanking");
    student_data = JSON.parse(student_data);
    console.log(student_data);
  
    $('.player-name').text(student_data[2].name);

}