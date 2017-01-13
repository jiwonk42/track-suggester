$(document).ready(function() {
  $("form#survey").submit(function(event) {
    //$("").hide();

    var name = $("input#name").val();
    var experience = $("select#experience").val();
    var interest = $("input:radio[name=interest]:checked").val();
    var language = $("input:radio[name=language]:checked").val();
    console.log(name);
    console.log(experience);
    console.log(interest);
    console.log(language);

    if(name) {
      
    } else {
      alert("Please enter your name.");
    }
    event.preventDefault();
  });
});
