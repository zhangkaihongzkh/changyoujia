$(function(){
	//点击收起展开明细
	(function(window){
		//获取到协议内容
		var $regulationsWrapper = $('.regulations-detail');
		//获取到点击部分
		var $regulationsBtn = $regulationsWrapper.find('.regulations-retract');
		$regulationsBtn.on('click',function(){
			var $this = $(this);//保存当前按钮
			var $thisRegulationsWrapper = $this.parent().parent();//获取当前父元素容器 
			if($thisRegulationsWrapper.hasClass('deploy')){//当前为展开状态
				$thisRegulationsWrapper.removeClass('deploy').addClass('pick-up');
				var $content = $thisRegulationsWrapper.find('.regulations-content');//获取到内容区域
				$content.slideUp();	//收起内容
				$this.html('展开明细<b></b>');
				$this.find('b').css({
					"transform":"rotate(180deg)",
				});
			}else if($thisRegulationsWrapper.hasClass('pick-up')){//当前为收起状态
				$thisRegulationsWrapper.removeClass('pick-up').addClass('deploy');
				var $content = $thisRegulationsWrapper.find('.regulations-content');//获取到内容区域
				$content.slideDown();	//展开内容
				$this.html('展开明细<b></b>');
			}	
		});
	})(window);
});