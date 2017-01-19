function CenterImgPlay(){  	
	var aLi = $('.small-img-bg .small-img-container li');//索引项
	var aImg = $("#video-list-banner .video-banner-wrapper ul.big-img-container");
	var iNow = 0;
	var timer;
	console.log(aLi.length);
	function tab(){
		aImg.stop().animate({
			top:-aLi.eq(iNow).index()*600
		},600);	
	}
	autoChange();
	function autoChange(){
		timer = setInterval(function(){
			iNow ++;
			if(iNow>aLi.length-1) iNow=0;
			tab();
		},4000);
	}  
	aLi.hover(function(){
		iNow = $(this).index();
		tab();
		clearInterval(timer);
	},function(){
		iNow = $(this).index();
		tab();
		autoChange();
	})
	aImg.hover(function(){
		clearInterval(timer);
	},function(){
		autoChange();
	})
}


$(function(){
	
	(function(window){
		//视频列表轮播区域
		CenterImgPlay();

	})(window);
});