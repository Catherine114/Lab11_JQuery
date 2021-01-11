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











});
