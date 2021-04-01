
$(document).ready(function () {
    $("button").on("click", calculate);
});
function calculate()
{
    //Gather all input

    let totalToppings = parseFloat( $("#toppings").val() );
    let numCoworker = parseFloat( $("#coworkers").val() );


    //Math...
    let totalPizzaToppings = (totalToppings * 1.50) + 15;
    let totalPizzaCostPerPerson = totalPizzaToppings / numCoworker;

    // OUTPUT!
    $("span#pizzafee").text(totalPizzaToppings.toFixed(2));
    $("span#perpersonfee").text(totalPizzaCostPerPerson.toFixed(2));

    $(".output2").show();
}
