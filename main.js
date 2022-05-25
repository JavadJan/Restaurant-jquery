$(document).ready(function(){
    $('#menu').hide()
    $('#toggle').on('click',function(){
        $('#navbar').toggleClass('active')
    })

    
    $('#search').click(function(){
        if ($('#navbar').hasClass ('active')) {
        $('#navbar').removeClass('active');
        }
    })
    
})
$(document).ready(function(){
    $("#slideDown").click(function(){
      $("#menu").show('slow');
    });

    $("#menu").mouseleave(function(){
        $(this).hide("slow");
      });
  });

