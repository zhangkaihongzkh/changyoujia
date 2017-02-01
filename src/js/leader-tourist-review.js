$(function(){
	//点击标签样式
	(function(window){
		//获取到点击的ul
		var $tagsWrapper = $('#leader-add-tags-content .add-tags-wrapper');
		//获取到每一个li
		var $tagsItem = $tagsWrapper.find('li');
		$tagsItem.each(function(){
			var $item = $(this);
			$item.on('click',function(){
				if($item.hasClass('selected')){
					$item.removeClass('selected');
				}else{
					$item.addClass('selected');
				}
			});
		});
	})(window);

	//评论列表分页
	(function(window){
		//这是一个非常简单的demo实例，让列表元素分页显示
		//回调函数的作用是显示对应分页的列表项内容
		//回调函数在用户每次点击分页链接的时候执行
		//参数page_index{int整型}表示当前的索引页
		var leaderClassicBlogInitPagination = function() {
			var num = 60;
			//获取到ul下有多少个li，现在为了展示效果，没有用获取，而是手动设定，后台开发可以通过num_entries获取li的个数
			//将num 修改为num_entries
			var num_entries = $("#leader-tourist-review-content .leader-tourist-review-container .tourist-review-item-wrapper li.leader-tourist-review-item").length;
			// 创建分页

			$("#leader-tourist-review-content .leader-tourist-review-container .pagination-wrapper").pagination(num_entries, {
				num_edge_entries: 1, //边缘页数
				num_display_entries: 4, //主体页数
				callback: pageselectCallback,
				items_per_page:4, //每页显示9项
				prev_text: "上一页",
				next_text: "下一页",
			});
		 }();

		function pageselectCallback(page_index, jq){
			
			var new_content = $("#leader-tourist-review-content .leader-tourist-review-container .tourist-review-item-wrapper li.leader-tourist-review-item").clone();
			
			$("#leader-tourist-review-content .leader-tourist-review-container .tourist-review-item-searchresult").empty().append(new_content); //`装载对应分页的内容
			
			return false;
		}
	})(window);

	//控制留言字数
	(function(window){
		var maxlength=100;//初始化最大字数
		//留言字数
		var $messageNum = $('#leader-tourist-review-content .leader-leave-message p span');
		//留言表单
		var $messageForm = $('#leader-tourist-review-content .leader-leave-message #leader-leave-message-form');
		//留言输入框
		var $textarea = $messageForm.find('textarea');
		$textarea.on('keyup',function(){
			var l = $(this).val().length;
			$messageNum.text(maxlength - l);//还可以输入多少个
			//字数超出
			if(parseInt($messageNum.text()) < 0){
				$messageNum.text(0);//强制字数
				var val=$(this).val().substring(0,140);/*截取指定的字符串，左闭右开*/
				$(this).val(val);
			}
		});
	})(window);
});