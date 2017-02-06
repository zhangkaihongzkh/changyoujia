//鼠标经过预览图片函数
function preview(img){
	$("#preview .jqzoom img").attr("src",$(img).attr("src"));
	$("#preview .jqzoom img").attr("jqimg",$(img).attr("bimg"));
}
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
	//放大镜效果
	(function(window){
		$(".jqzoom").jqueryzoom({xzoom:270,yzoom:300});
	})(window);

	//图片预览小图移动效果,页面加载时触发
	(function(window){
		var tempLength = 0; //临时变量,当前移动的长度
		var viewNum = 4; //设置每次显示图片的个数量
		var moveNum = 1; //每次移动的数量
		var moveTime = 300; //移动速度,毫秒
		var scrollDiv = $(".spec-scroll .items ul"); //进行移动动画的容器
		var scrollItems = $(".spec-scroll .items ul li"); //移动容器里的集合
		var moveLength = scrollItems.eq(0).width() * moveNum; //计算每次移动的长度
		var countLength = (scrollItems.length - viewNum) * scrollItems.eq(0).width(); //计算总长度,总个数*单个长度

		//下一张
		$(".spec-scroll .next").bind("click",function(){
			if(tempLength < countLength){
				if((countLength - tempLength) > moveLength){
					scrollDiv.animate({left:"-=" + moveLength + "px"}, moveTime);
					tempLength += moveLength;
				}else{
					scrollDiv.animate({left:"-=" + (countLength - tempLength) + "px"}, moveTime);
					tempLength += (countLength - tempLength);
				}
			}
		});
		//上一张
		$(".spec-scroll .prev").bind("click",function(){
			if(tempLength > 0){
				if(tempLength > moveLength){
					scrollDiv.animate({left: "+=" + moveLength + "px"}, moveTime);
					tempLength -= moveLength;
				}else{
					scrollDiv.animate({left: "+=" + tempLength + "px"}, moveTime);
					tempLength = 0;
				}
			}
		});
	})(window);

	//tab选项卡
	(function(window){
		$('#product-detail-content .product-detail-main .product-detail-tabs li').on('click',function(){
			var ind = $(this).index();//获取当前li的值
			$(this).addClass('active').siblings().removeClass('active');
			tabs("#product-detail-content .product-detail-main",ind);
		});
	})(window);

	//锚链接跳转
	(function(window){
		$(function(){  
		  $('a[href*=#],area[href*=#]').click(function() {
			$(this).parent().addClass('active').siblings().removeClass('active');
			var $parentNode = $(this).parent();
		    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		      var $target = $(this.hash);
		      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
		      if ($target.length) {
		        var targetOffset = $target.offset().top;
		        $('html,body').animate({
		          scrollTop: targetOffset
		        },
		        800);
		        return false;
		      }
		    }
		  });
		});
	})(window);
});