$(function(){
	//经典游记列表
	(function(window){
		//这是一个非常简单的demo实例，让列表元素分页显示
		//回调函数的作用是显示对应分页的列表项内容
		//回调函数在用户每次点击分页链接的时候执行
		//参数page_index{int整型}表示当前的索引页
		var leaderClassicBlogInitPagination = function() {
			var num = 60;
			//获取到ul下有多少个li，现在为了展示效果，没有用获取，而是手动设定，后台开发可以通过num_entries获取li的个数
			//将num 修改为num_entries
			var num_entries = $("#leader-classic-blogs-content .leader-classic-blogs-container .classic-blogs-item-wrapper li.leader-classic-blogs-item").length;
			// 创建分页

			$("#leader-classic-blogs-content .leader-classic-blogs-container .pagination-wrapper").pagination(num_entries, {
				num_edge_entries: 1, //边缘页数
				num_display_entries: 4, //主体页数
				callback: pageselectCallback,
				items_per_page:4, //每页显示9项
				prev_text: "上一页",
				next_text: "下一页",
			});
		 }();

		function pageselectCallback(page_index, jq){
			
			var new_content = $("#leader-classic-blogs-content .leader-classic-blogs-container .classic-blogs-item-wrapper li.leader-classic-blogs-item").clone();
			
			$("#leader-classic-blogs-content .leader-classic-blogs-container .classic-blogs-item-searchresult").empty().append(new_content); //`装载对应分页的内容
			
			return false;
		}
	})(window);
});