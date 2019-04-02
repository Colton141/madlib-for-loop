// $(document).ready(function() {
//   $('form').submit(function(event) {
//     var userAnswers = ["verb1", "place", "noun", "verb2", "adjective"]
//     userAnswers.forEach(function(userAnswer) {
//       var storyOutput = $("input#" + userAnswer).val();
//       // var verb1Input = $('input#verb1').val();
//       $("." + userAnswer).text(storyOutput);
//       // $('.verb1').text(verb1Input);
//     })
//
//     $('#story').show();
//     event.preventDefault();
//   });
// });


$(document).ready(function() {
  $('form').submit(function(event) {
    var userAnswers = ["verb1", "place", "noun", "verb2", "adjective"];
    for (index = 0; index < userAnswers.length; index +=1) {
      alert($("input#" + userAnswers[index]).val());
      $("." + userAnswers[index]).text($("input#" + userAnswers[index]).val())
    }

    $('#story').show();
    event.preventDefault();
  });
});
