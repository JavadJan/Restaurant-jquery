$(document).ready(function () {
    
    $('#menu').hide()

    $('#toggle').on('click', function () {
        $('#navbar').toggleClass('active')
    })



    $('#search').click(function () {
        if ($('#navbar').hasClass('active')) {
            $('#navbar').removeClass('active');
        }
    })

})
var title
$(document).ready(function () {
    let i = 0;
    $("#slideDown").click(function () { // click on menu for dropdown menu
        $("#menu").show('slow');
        
    });

    // =================================> MENU FOOD ==============
    $("#see-food").click(function(){ // for menu see food 
        console.log($(this).text())
        $("#food-title").text($(this).text())
        
    })

    // =========================== MENU CHINES FOOD ================
    $("#chines-food").click(function(){ // for menu see food 
        console.log($(this).text())
        $("#food-title").text($(this).text())
        
    })

    // =========================== MENU INDIAN FOOD ================
    $("#indian-food").click(function(){ // for menu see food 
        console.log($(this).text())
        $("#food-title").text($(this).text())
        
    })

    // =========================== MENU ITALY FOOD ================
    $("#italy-food").click(function(){ // for menu see food 
        console.log($(this).text())
        $("#food-title").text($(this).text())
        let food = ``
    $('#content').html(``)
        
    })


    $("#menu").mouseleave(function () { // when mouse leave from dropdown menu from nav bar
        $(this).hide("slow");
    });

    $('.uil-plus').click(function () { // for add 1 for number of food
        $(this).prev().text((i += 1).toString())

    })

    $('.uil-minus').click(function () {

        let num = parseInt($(this).next().text())
        if (num > 0) {
            num--
            $(this).next().text(num) // read again and prepare for 1 minus again
        }
        else {
            $(this).next().text(0)
        }


    })

    
});

