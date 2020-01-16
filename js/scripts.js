$(document).ready(function() {
    $("#formOne").submit(function(event) {
      event.preventDefault();
      $("#a").text($("#name").val());
      $("#b").text($("#food").val());
      $("#c").text($("input:radio[name=flavor]:checked").val());
      $("#d").text($("#born").val());
      $("#e").text($("#color").val());
      $("#f").text($("#phone").val());             
      $("#result").show();
    });
  });  