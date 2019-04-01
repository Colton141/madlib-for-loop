$(document).ready(function() {
  $('form').submit(function(event) {

    var inputs = ["verb1", "place", "noun", "verb2", "adjective"]
    inputs.forEach(function(input) {
      var answerInput = $("input#" + input).val();
      // var verb1Input = $('input#verb1').val();
      $("." + input).text(answerInput);
      // $('.verb1').text(verb1Input);
    })

    $('#story').show();
    event.preventDefault();
  });
});
