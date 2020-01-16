$(document).ready(function() {
    $("#formOne").submit(function(event) {
      event.preventDefault();

    var s1 = parseInt ($("#side1").val());
    var s2 = parseInt ($("#side2").val());
    var s3 = parseInt ($("#side3").val());

    var a1 = "Isosceles";
    var a2 = "Equiteral";
    var a3 = "Scalene";

    if (s1+s2<= s3 || s2+s3<=s1 || s1+s3<= s2) {
      alert("This is NOT a triangle. Please, provide values one more time")
    } else if (s1 === s2 && s2 === s3 && s1 === s3) {
      $("#type").text(a2);
    
    } else if (s1 === s2 || s2 === s3 || s1 === s3) {
      $("#type").text(a1);
    
    } else {
      $("#type").text(a3);
    }
    
    $("#result").show();
    }); 
  });  