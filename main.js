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
    let i=0;
    $("#slideDown").click(function(){
      $("#menu").show('slow');
    });

    $("#menu").mouseleave(function(){
        $(this).hide("slow");
      });
    
      $('.uil-plus').click(function () {
          $(this).prev().text((i+=1).toString())
          
      })
      $('.uil-minus').click(function () {
        $(this).prev().parseInt(text())-=1
        
    })
  });

