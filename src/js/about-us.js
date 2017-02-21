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