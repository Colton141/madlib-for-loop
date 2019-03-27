$(document).ready(function() {
  $('form').submit(function(event) {
    var verb1Input = $('input#verb1').val();
    var placeInput = $('input#place').val();
    var nounInput = $('input#noun').val();
    var verb2Input = $('input#verb2').val();
    var adjectiveInput = $('input#adjective').val();

    $('.verb1').text(verb1Input);
    $('.place').text(placeInput);
    $('.noun').text(nounInput);
    $('.verb2').text(verb2Input);
    $('.adjective').text(adjectiveInput);

    $('#story').show();

    event.preventDefault();
  });
});
