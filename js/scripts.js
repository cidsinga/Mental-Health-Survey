$(document).ready(function(){
  $("form#mental-health-survey").submit(function(event){
    event.preventDefault();
    var results = []

    $("input:checkbox[name=mental-health]:checked").each(function(){
      var mentalHealthSurvey = parseInt($(this).val());

      results.push(mentalHealthSurvey)
    });

    var total = 0
    results.forEach(function(result) {
      total += result;
    });

    console.log(total);

    if (total < 7) {
      $("#great-job").show();
      $("#coping, #therapist").hide();
      } else if (total < 13) {
      $("#coping").show();
      $("#great-job, #therapist").hide();
    } else if (total < 19) {
      $("#therapist").show();
      $("#coping, #great-job").hide();
    }
  });
});



//   $('#work-responses').append(mentalHealthSurvey + "<br>");
// });
//
// $('#transportation_survey').hide();


// $("#fun-responses").show();
// $("input:checkbox[name=fun-transportation]:checked").each(function(){
  //   var funTransportationMode = $(this).val();
  //   $('#fun-responses').append(funTransportationMode + "<br>");
  // });
