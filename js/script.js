

$(function(){
	$('.menu__btn').click(function(){
		$('#menu').addClass('active');
		$('body').addClass('lock');
	})
	$('.menu-top__close').click(function(){
		$('#menu').removeClass('active');
		$('body').removeClass('lock');
	})
	$('#agreeL').click(function(){
		$(this).toggleClass('active');
	});
	$('.btn_2').click(function(){
		$(this).addClass('active');
		$('.btn_1').removeClass('active');
		$('.btn_3').removeClass('active');
	});
	$('.btn_1').click(function(){
		$(this).addClass('active');
		$('.btn_2').removeClass('active');
		$('.btn_3').removeClass('active');
	});
	$('.btn_3').click(function(){
		$(this).addClass('active');
		$('.btn_2').removeClass('active');
		$('.btn_1').removeClass('active');
	});



	$('.btn_w2').click(function(){
		$(this).addClass('active');
		$('.btn_w1').removeClass('active');
		$('.btn_w3').removeClass('active');
	});
	$('.btn_w1').click(function(){
		$(this).addClass('active');
		$('.btn_w2').removeClass('active');
		$('.btn_w3').removeClass('active');
	});
	$('.btn_w3').click(function(){
		$(this).addClass('active');
		$('.btn_w2').removeClass('active');
		$('.btn_w1').removeClass('active');
	});
	$('.open_spoiler').click(function(){
		$('.spoiler_text').toggleClass('active');
		if($('.spoiler_text').hasClass('active')){
			$(this).text("скрыть текст");
		}else{
			$(this).text("раскрыть текст");
		}
		
	})
});

$(document).ready(function(){
	

	let position = 0;

	const track = $('.slider-track');
	const item = $('.slider-item');
	
	const trackW = $('.block_3-track');
	const itemW = $('.block_3__item');

	const btn1 = $('.btn_1');
	const btn2 = $('.btn_2');
	const btn3 = $('.btn_3');

	const btnw1 = $('.btn_w1');
	const btnw2 = $('.btn_w2');
	const btnw3 = $('.btn_w3');

	const itemWidh = item.width();
	const itemWidhW = itemW.width();

	console.log(itemWidh);
	console.log(itemWidhW);

	btn2.click(function(){
		position = -itemWidh;
		setPosition();
	});
	btn1.click(function(){
		position = 0;
		setPosition();
	})
	btn3.click(function(){
		position = -itemWidh*2;
		setPosition();
	})

	btnw2.click(function(){
		position = -itemWidhW;
		setPositionW();
	});
	btnw1.click(function(){
		position = 0;
		setPositionW();
	})

	btnw3.click(function(){
		position = -itemWidhW*2;
		setPositionW();
	})

	const setPosition = () => {
		track.css({
			transform: 'translateX('+position+'px)',
		});
	}

	const setPositionW = () => {
		trackW.css({
			transform: 'translateX('+position+'px)',
		});
	}
	setPosition();
	setPositionW();
	
});
$(window).resize(function(){
	let position = 0;
	setPosition();
	setPositionW();

	const track = $('.slider-track');
	const item = $('.slider-item');
	
	const trackW = $('.block_3-track');
	const itemW = $('.block_3__item');

	const btn1 = $('.btn_1');
	const btn2 = $('.btn_2');
	const btn3 = $('.btn_3');

	const btnw1 = $('.btn_w1');
	const btnw2 = $('.btn_w2');
	const btnw3 = $('.btn_w3');

	const itemWidh = item.width();
	const itemWidhW = itemW.width();

	console.log(itemWidh);
	console.log(itemWidhW);

	btn2.click(function(){
		position = -itemWidh;
		setPosition();
	});
	btn1.click(function(){
		position = 0;
		setPosition();
	})
	btn3.click(function(){
		position = -itemWidh*2;
		setPosition();
	})

	btnw2.click(function(){
		position = -itemWidhW;
		setPositionW();
	});
	btnw1.click(function(){
		position = 0;
		setPositionW();
	})

	btnw3.click(function(){
		position = -itemWidhW*2;
		setPositionW();
	})

	const setPosition = () => {
		track.css({
			transform: 'translateX('+position+'px)',
		});
	}

	const setPositionW = () => {
		trackW.css({
			transform: 'translateX('+position+'px)',
		});
	}
	
});


