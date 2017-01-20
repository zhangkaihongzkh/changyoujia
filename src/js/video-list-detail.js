$(function(){
	//点击喜欢更换背景颜色同时修改值
	(function(window){
		var aLove = $('#video-list-detail-content .video-list-detail-main .video-list-detail-wrapper .video-item-detail a');
		console.log(aLove);
		aLove.on('click',function(){

			var loveNumItem = aLove.find('span');
			//获取到数值
			var loveNum = parseInt(loveNumItem.html());
			
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				--loveNum;
				loveNumItem.html(loveNum);
			}else{
				$(this).addClass('active');
				++loveNum;
				loveNumItem.html(loveNum);
			}
		});
	})(window);
});