$(document).ready(function() {
  $('form').submit(function(event) {
    var userAnswers = ["verb1", "place", "noun", "verb2", "adjective"]
    userAnswers.forEach(function(userAnswer) {
      var storyOutput = $("input#" + userAnswer).val();
      // var verb1Input = $('input#verb1').val();
      $("." + userAnswer).text(storyOutput);
      // $('.verb1').text(verb1Input);
    })

    $('#story').show();
    event.preventDefault();
  });
});
