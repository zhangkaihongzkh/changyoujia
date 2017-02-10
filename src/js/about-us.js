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
	//动态修改员工风采区域的位置
	(function(window){
		
		var $bigItem = $('#staff-style .big-item');//获取到每一个员工大item
		var $smallItem = $('#staff-style .small-item');//获取到每一个员工大item
		var $bigItemNum = $bigItem.length;	//大的个数
		var $smallItemNum = $smallItem.length;	//大的个数
		$bigItem.each(function(){
			var $this = $(this);//当前对象
			var $idx = $(this).index();
			var $width = $(this).width();//宽度
			var $height = $(this).height();//高度
			//console.log($idx);
			if($idx % 2 == 1){//奇数
				$this.css({
					"left": (($idx)%6 * ($this.width() - 30)) + 'px',
					"top": $idx * ($height +30) + 'px',
				});
			} else if($idx % 2 == 0){//偶数
				$this.css({
					"right": (($idx)%6 * ($this.width() + 30)) + 'px',
					"top": $idx * ($height -30) + 'px',
				});
			}

		});
		$smallItem.each(function(){
			var $this = $(this);//当前对象
			var $idx = $(this).index() - $bigItemNum;
			var $width = $(this).width();//宽度
			var $height = $(this).height();//高度
			//console.log($idx);
			if($idx % 2 == 0){//奇数
				$this.css({
					"left": (($idx)%5 * ($this.width()+ 60 )) + 'px',
					"top": $idx * ($height +15) + 'px',
				});
			} else if($idx % 2 == 1){//偶数
				$this.css({
					"left": (($idx)%5 * ($this.width()+ 60 )) + 'px',
					"top": $idx * ($height -15) + 'px',
				});
			}
		});
	})(window);

	//加入我们选项卡
	(function(window){
		//获取到ul选项卡
		var $tabsBtnWrapper = $('#join-us .join-us-tabs');
		var $tabsBtnItem = $tabsBtnWrapper.find('li');
		//获取到内容区域
		$tabsBtnItem.on('click',function(){
			var ind = $(this).index();//获取当前li的值
			$(this).addClass('active').siblings().removeClass('active');
			tabs('#join-us .main-content .tabs-content-wrapper',ind);
		});	
	})(window);
});