/*check off specific todos by clicking*/

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

/*deleting element by clicking on X */

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(800, function(){
        $(this).remove();
    });
	event.stopPropagation();
});

/*adding new todo to list*/

$("input").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        
        //new todo will add in list
        
        
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + " </li>");  
    }
    
});

/*working of plus button*/

$(".fa-plus").click(function(){
    $("input").fadeToggle();
});