$( document ).ready(function(){
	    console.log($( "div").html());

	    $(".about_me").click(function(){
        	$("p:first").hide();
   		});
    	$(".about_me_part2").click(function(){
    		$("p:first").show();
    	});

    	$("li").click(function(){ 
	    	console.log($("input").attr("type"));  
	    });

    	$("#foto").click(function(){
    		$('.show').after($('<p />')).text('Дата рождения: 4 января 2001г.');
			$('.secret').before($('<p />')).text('Мое фото:');
		});

		$(".fri").click(function(){ 
	    	console.log($("p").css('color'));
	  	});

    	$(".fri1").click(function(){
    		$(this).addClass("intro");
    	});

    	$("#wrap").click(function(){
    		$(this).wrap('<div class="wrap1" />'); 
    	});

		$("#hello").click(function(){
    		$("#hello").append(document.createTextNode("Hello"));
    		$("#hello").prepend(document.createTextNode("PHRASE: "));


    	});

    	$( ".withSelector" ).click(function(){ 
	    		$( "*" ).css( "border", "none" ); 
	    			$( "li" ).filter(".field") 
		     				 .css( "border", "2px solid green" ); 
    	});


		$("#mytab").click(function(){
    		$("#tab").clone(true).css('color','red').appendTo('body'); 
    	});

$("#but4").button();
$(function () {
      $("#datepicker").datepicker();
    });
    $(function () {
      $("#kvadr").draggable();
    });

    $("#accordion").accordion();





});
