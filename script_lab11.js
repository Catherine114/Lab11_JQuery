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
			$('.secret').before($('<p />')).text('ФИО:');
		});

    	$(".circle").click(function(){
    		$('.circle').hide().delay(2000).show();
    	});











});
