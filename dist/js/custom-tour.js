$(function(){
	//案例展示轮播区域
	(function(window){
		var caseShowSwiper = new Swiper ('#case-show .swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    speed:500,//速度
		    simulateTouch:false,//鼠标无效

		   	// 如果需要前进后退按钮
		    nextButton: '#case-show .swiper-button-next',
		    prevButton: '#case-show .swiper-button-prev',
		  });        
	})(window);
});