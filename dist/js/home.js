$(function(){
	//广告区域的轮播
	(function(window){
		
		var mainAdSwiper = new Swiper ('#main-ad .swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    simulateTouch:false,//鼠标无效
	    speed:1000,//速度
	   /* autoplay:2000,	//自动播放*/
	    
	    // 如果需要前进后退按钮
	    nextButton: '#main-ad .swiper-button-next',
	    prevButton: '#main-ad .swiper-button-prev',
	    
	  })        
	})(window);

	//侧边栏动画效果
	(function(window){
		//用户
		$('#sidebar .sidebar-user').on('mouseover',function(){
			$('.user-center').stop().animate({
				opacity:1,
				display:'block'
			},400);
		});
		$('#sidebar .sidebar-user').on('mouseout',function(){
			$('.user-center').stop().animate({
				opacity:0,
				display:'none'
			},400);
		});

		//客服中心联系
		$('#sidebar .sidebar-phone').on('mouseover',function(){
			$('.contact-phone').stop().animate({
				opacity:1,
				display:'block'
			},400);
		});
		$('#sidebar .sidebar-phone').on('mouseout',function(){
			$('.contact-phone').stop().animate({
				opacity:0,
				display:'none'
			},400);
		});
		//客服中心联系
		/*$('#sidebar .sidebar-phone').hover(function(){
			$('.contact-phone').animate({
				left:'-=170px',
				opacity:1,
			},400);
		},function(){
			$('.contact-phone').animate({
				left:'+=170px',
				opacity:0,
			},400);
		});*/
	})(window);

	//单季热销轮播区域
	(function(window){
		var singleHotSwiper = new Swiper ('#single-hot .swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    
		    // 如果需要分页器
		    pagination: '.swiper-pagination',
		    paginationClickable :true,
		    speed:500,//速度
		     simulateTouch:false,//鼠标无效

		  })        
	})(window);
})