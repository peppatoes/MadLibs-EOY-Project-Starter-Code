let storiesCreated=0;


$("button").click(function() {
    let name = $(".name-input").val();
    let transport = $(".transport-input").val();
    let adjective = $(".adjective-input").val();
    let number =  $(".number-input").val();
    console.log(name,transport);

    $(".story").append("<p>"+ "One day my buddy " + name + "and I decided to take a trip n the beach, so we bought tickets for a plane" + transport +"over. It was a" + adjective + "the day at the beach! we got tired and" + number + "hours!" + "</p>");
});