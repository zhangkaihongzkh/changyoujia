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
	//tab选项卡切换兑换券
	
	(function(window){
		
		var $couponNumTabs = $('#person-center-coupon-content .person-center-coupon-num .coupon-num-tabs li'); //获取到选项卡
		var $couponTabcon = $('#person-center-coupon-content .coupon-content-wrapper');//获取到选项卡切换内容区域
		$couponNumTabs.on('click',function(){
			var ind = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			
			tabs('#person-center-coupon-content .coupon-content-wrapper',ind);
		})
	})(window);
});
