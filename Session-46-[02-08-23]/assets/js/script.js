$(document).ready(function() {

  // click event
    $("#myButton").click(function() {
        $(this).text("Clicked!");
        $(this).css("background-color", "green");
        $(this).css("color", "white");
    });
    
    // double click event
    $("#myBox").dblclick(function() {
        $(this).text("Double Clicked!");
        $(this).css("background-color", "orange");
        $(this).css("color", "white");
    });

    // mouse enter event
    $("button").mouseenter(function() {
        $(this).css("background-color", "green");
    });

    // mouse leave event
    $("#button").mouseleave(function() {
        $(this).css("background-color", "rgb(190, 173, 230)");
    });

    // mouseup event
    $("#button").mouseup(function() {
        $(this).text("Mouse Up");
        $(this).css("background-color", "green");
        $(this).css("color", "white");
    });

    // mouse leave event for button 2
    $("#button-one").mouseleave(function() {
      $(this).css("background-color", "rgb(190, 173, 230)");
    });

    // mouse down event
    $("#button-one").mousedown(function() {
        $(this).text("Mouse Down");
        $(this).css("background-color", "blue");
        $(this).css("color", "white");
    });

    // hover event
    $('#language-wrapper').hover(
        function() {
          $('.language-text').fadeIn();
        },
        function() {
          $('.language-text').fadeOut();
        }
    );

    // focus event 
    $("input").focus(function(){
        $(this).css("background-color", "lightblue");
    });

    // blur event
    $("input").blur(function(){
      $(this).css("background-color", "lightgreen");
    });


    // on event
    $("p").on({
      mouseenter: function(){
        $(this).css("background-color", "lightgray");
      },  
      mouseleave: function(){
        $(this).css("background-color", "lightblue");
        $(this).css("color", "#202020");
      }, 
      click: function(){
        $(this).css("background-color", "green");
        $(this).css("color", "white");
      }  
    });
    
});