function start(){
	var dotloader 	= 1;

	var timeout = setInterval(function(){
		if( dotloader == 6 ){
			clearInterval(timeout);
			$('#beforePageLoad').animate({opacity: 0}, 2000, function(){
				$(this).hide(function(){
					$("#content-div").animate({opacity: 1}, 2000, function(){
						$(this).css("height", "200em");
						$(document).prop("title", "Web Developer | Raymund");
					});
				});
			});
		}else if( dotloader == 3 ){
			$('.dotLoader').html('.');
			dotloader+= 1;
		}else {
			$('.dotLoader').append('.');
			dotloader+= 1;
		}
	}, 1000);


	$(".nav-title").mouseover(function(){
		$(this).css("color","#0c7769");
	});

	$(".nav-title").mouseout(function(){
		$(this).css("color","#109618");
	});
}

$(document).ready(start());