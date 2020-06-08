$(document).ready(function()  {
  $("form#formOne").submit(function(event) {
  
    const questionOne = $("input:radio[name=question1]:checked").val();
    const questionTwo = $("input:radio[name=question2]:checked").val();
    const questionThree = $("input:radio[name=question3]:checked").val();

    if (questionOne === "beets" && questionTwo === "cow" && questionThree === "farmer") {
      $("#a-dwight").fadeIn();
      $("#a-angela, #a-kevin").hide();
    } else if (questionOne === "chili" && questionTwo === "dog" && questionThree === "paper") {
      $("#a-kevin").fadeIn();
      $("#a-dwight, #a-angela").hide();
    } else {
      $("#a-angela").fadeIn();
      $("#a-dwight, #a-kevin").hide();
    }
    event.preventDefault()
  });
});