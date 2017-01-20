//TAB控制函数
function tabs(tabId, tabNum){
	/*//设置点击后的样式
	$(tabId + " .form-tab li").removeClass('active');
	$(tabId + " .form-tab li").eq(tabNum).addClass('active');*/
	//根据参数决定要显示的内容
	$(tabId + " .tabcon").hide();
	$(tabId + " .tabcon").eq(tabNum).show();
}
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
		},5000);
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

	//视频列表轮播
	(function(window){
		
		CenterImgPlay();

	})(window);

	//选项卡样式切换
	(function(window){
		$('#video-list-content .video-list-main .video-list-tabs li').on('click',function(){
			var ind = $(this).index();//获取当前li的值
			$(this).addClass('active').siblings().removeClass('active');
			tabs("#video-list-content .video-list-wrapper",ind);
		});
	})(window);

	//最新发布分页插件
	(function(window){
		//这是一个非常简单的demo实例，让列表元素分页显示
		//回调函数的作用是显示对应分页的列表项内容
		//回调函数在用户每次点击分页链接的时候执行
		//参数page_index{int整型}表示当前的索引页
		var latestReleaseInitPagination = function() {
			var num_entries = $("#video-list-content .video-list-main .video-list-wrapper .latest-release li.video-item").length;
			// 创建分页
			$(".pagination-container").pagination(num_entries, {
				num_edge_entries: 1, //边缘页数
				num_display_entries: 4, //主体页数
				callback: pageselectCallback,
				items_per_page:9, //每页显示9项
				prev_text: "上一页",
				next_text: "下一页",
			});
		 }();

		function pageselectCallback(page_index, jq){
			
			var new_content = $("#video-list-content .video-list-main .video-list-wrapper .latest-release .video-content-wrapper li.video-item").clone();
			
			$(".latest-release-searchresult").empty().append(new_content); //`装载对应分页的内容
			return false;
		}
	})(window);

	//评论最多分页插件
	(function(window){
		//这是一个非常简单的demo实例，让列表元素分页显示
		//回调函数的作用是显示对应分页的列表项内容
		//回调函数在用户每次点击分页链接的时候执行
		//参数page_index{int整型}表示当前的索引页
		var commentMostInitPagination = function() {
			var num_entries = $("#video-list-content .video-list-main .video-list-wrapper .comment-most li.video-item").length;
			// 创建分页
			$(".pagination-container").pagination(num_entries, {
				num_edge_entries: 1, //边缘页数
				num_display_entries: 4, //主体页数
				callback: pageselectCallback,
				items_per_page:9, //每页显示9项
				prev_text: "上一页",
				next_text: "下一页",
			});
		 }();

		function pageselectCallback(page_index, jq){
			
			var new_content = $("#video-list-content .video-list-main .video-list-wrapper .comment-most .video-content-wrapper li.video-item").clone();
			
			$(".comment-most-searchresult").empty().append(new_content); //`装载对应分页的内容
			return false;
		}
	})(window);

	//观看最多分页插件
	(function(window){
		//这是一个非常简单的demo实例，让列表元素分页显示
		//回调函数的作用是显示对应分页的列表项内容
		//回调函数在用户每次点击分页链接的时候执行
		//参数page_index{int整型}表示当前的索引页
		var watchMostInitPagination = function() {
			var num_entries = $("#video-list-content .video-list-main .video-list-wrapper .watch-most li.video-item").length;
			// 创建分页
			$(".pagination-container").pagination(num_entries, {
				num_edge_entries: 1, //边缘页数
				num_display_entries: 4, //主体页数
				callback: pageselectCallback,
				items_per_page:9, //每页显示9项
				prev_text: "上一页",
				next_text: "下一页",
			});
		 }();

		function pageselectCallback(page_index, jq){
			
			var new_content = $("#video-list-content .video-list-main .video-list-wrapper .watch-most .video-content-wrapper li.video-item").clone();
			
			$(".watch-most-searchresult").empty().append(new_content); //`装载对应分页的内容
			return false;
		}
	})(window);
});