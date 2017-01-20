//TAB控制函数
function tabs(tabId, tabNum){
	/*//设置点击后的样式
	$(tabId + " .form-tab li").removeClass('active');
	$(tabId + " .form-tab li").eq(tabNum).addClass('active');*/
	//根据参数决定要显示的内容
	$(tabId + " .tabcon").hide();
	$(tabId + " .tabcon").eq(tabNum).show();
}	
$(function(){
	(function(window){
		$('#points-shop-main-content .points-shop-right .points-shop-tabs li').on('click',function(){
			var ind = $(this).index();//获取当前li的值
			$(this).addClass('active').siblings().removeClass('active');
			tabs("#points-shop-main-content .poins-shop-wrapper",ind);
		});
	})(window);

	//最新发布分页插件
	(function(window){
		//这是一个非常简单的demo实例，让列表元素分页显示
		//回调函数的作用是显示对应分页的列表项内容
		//回调函数在用户每次点击分页链接的时候执行
		//参数page_index{int整型}表示当前的索引页
		var couponInitPagination = function() {
			var num_entries = $("#points-shop-main-content .poins-shop-wrapper .coupon-exchange li.exchange-item").length;
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
			var LENGTH = $(".coupon-exchange .exchange-wrapper li.exchange-item").length;
			console.log(LENGTH);
			var new_content = $(".coupon-exchange .exchange-wrapper li.exchange-item").clone();
			$(".coupon-exchange-searchresult").empty().append(new_content); //`装载对应分页的内容
			return false;
		}
	})(window);

	//评论最多分页插件
	(function(window){
		//这是一个非常简单的demo实例，让列表元素分页显示
		//回调函数的作用是显示对应分页的列表项内容
		//回调函数在用户每次点击分页链接的时候执行
		//参数page_index{int整型}表示当前的索引页
		var souvenirInitPagination = function() {
			var num_entries = $("#points-shop-main-content .poins-shop-wrapper .souvenir-exchange li.exchange-item").length;
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
			var LENGTH = $(".souvenir-exchange .exchange-wrapper li.exchange-item").length;
			console.log(LENGTH);
			var new_content = $(".souvenir-exchange .exchange-wrapper li.exchange-item").clone();
			$(".souvenir-exchange-searchresult").empty().append(new_content); //`装载对应分页的内容
			return false;
		}
	})(window);

	//观看最多分页插件
	(function(window){
		//这是一个非常简单的demo实例，让列表元素分页显示
		//回调函数的作用是显示对应分页的列表项内容
		//回调函数在用户每次点击分页链接的时候执行
		//参数page_index{int整型}表示当前的索引页
		var entityInitPagination = function() {
			var num_entries = $("#points-shop-main-content .poins-shop-wrapper .entity-exchange li.exchange-item").length;
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
			var LENGTH = $(".entity-exchange .exchange-wrapper li.exchange-item").length;
			console.log(LENGTH);
			var new_content = $(".entity-exchange .exchange-wrapper li.exchange-item").clone();
			$(".entity-exchange-searchresult").empty().append(new_content); //`装载对应分页的内容
			return false;
		}
	})(window);
});