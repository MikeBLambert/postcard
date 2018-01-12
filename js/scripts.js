$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var yourFirstName = $("input#firstName").val();
    var yourLastName = $("input#lastName").val();
    var yourAddress = $("input#address").val();
    var yourCity = $("input#city").val();
    var yourState = $("input#state").val();
    var yourZip = $("input#zip").val();

    $(".firstName").text(yourFirstName);
    $(".lastName").text(yourLastName);
    $(".address").text(yourAddress);
    $(".city").text(yourCity);
    $(".state").text(yourState);
    $(".zip").text(yourZip);

    $("#letter").show();

    event.preventDefault();
  });
});
