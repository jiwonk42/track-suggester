$(document).ready(function() {
  $("form#survey").submit(function(event) {
    $("#result").hide();

    var name = $("input#name").val();
    var experience = $("select#experience").val();
    var interest = $("input:radio[name=interest]:checked").val();
    var language = $("input:radio[name=language]:checked").val();
    console.log(name);
    console.log(experience);
    console.log(interest);
    console.log(language);

    if(name) {
      $("#result").show();
      $("#name-result").text(name);
    } else {
      alert("Please enter your name.");
    }
    event.preventDefault();
  });
});
