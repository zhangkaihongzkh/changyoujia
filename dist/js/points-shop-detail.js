//鼠标经过预览图片函数
function preview(img){
	$("#preview .jqzoom img").attr("src",$(img).attr("src"));
	$("#preview .jqzoom img").attr("jqimg",$(img).attr("bimg"));
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

	//点击修改商品数量效果
	(function(window){
		$('#points-shop-detail-banner .head-box-content #points-shop-detail-exchange .num-decrease').on('click',function(){
			var needNum = $('#points-shop-detail-banner .head-box-content #need-num-input').val();
			if(needNum<=0){
				$('#points-shop-detail-banner .head-box-content #need-num-input').val(0);
			}else{
				needNum--;
				$('#points-shop-detail-banner .head-box-content #need-num-input').val(needNum);
			}
		});
		$('#points-shop-detail-banner .head-box-content #points-shop-detail-exchange .num-add').on('click',function(){
			var needNum = $('#points-shop-detail-banner .head-box-content #need-num-input').val();
			if(needNum>99){
				$('#points-shop-detail-banner .head-box-content #need-num-input').val(99);
			}else{
				needNum++;
				$('#points-shop-detail-banner .head-box-content #need-num-input').val(needNum);
			}
		});
	})(window);
});