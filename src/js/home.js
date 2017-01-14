$(function(){
	//广告区域的轮播
	(function(window){
		
		var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    
	    
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    
	  })        
	})(window);

	//侧边栏动画效果
	(function(window){
		//用户
		$('#sidebar .sidebar-user').hover(function(){
			$('.user-center').animate({
				left:'-=100px',
				opacity:1,

			},400);
		},function(){
			$('.user-center').animate({
				left:'+=100px',
				opacity:0,
			},400);
		});
		//客服中心联系
		$('#sidebar .sidebar-phone').hover(function(){
			$('.contact-phone').animate({
				left:'-=170px',
				opacity:1,

			},400);
		},function(){
			$('.contact-phone').animate({
				left:'+=170px',
				opacity:0,
			},400);
		});
	})(window);
})