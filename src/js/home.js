$(function(){
	//广告区域的轮播
	(function(window){
		
		
	})(window);

	//侧边栏动画效果
	(function(window){
		//用户
		$('#sidebar .sidebar-user').hover(function(){
			$('.user-center').stop().animate({
				left:'-=101px',
				opacity:1,

			},400);
		},function(){
			$('.user-center').stop().animate({
				left:'+=101px',
				opacity:0,
			},400);
		});
		//客服中心联系
		$('#sidebar .sidebar-phone').hover(function(){
			$('.contact-phone').animate({
				left:'-=171px',
				opacity:1,

			},400);
		},function(){
			$('.contact-phone').animate({
				left:'+=171px',
				opacity:0,
			},400);
		});
	})(window);
})