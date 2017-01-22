$(function(){
	//左侧滚动条固定
	(function(window){
		var $travelNotesAnchor = $('#travel-notes-detail-content .travel-notes-container-anchor')
		var anchorTop = $travelNotesAnchor.offset().top;
		var $travelNotesContent = $('#travel-notes-detail-content .travel-notes-detail-text');
		var travelNotesContentHeight = $travelNotesContent.height();
		console.log(travelNotesContentHeight);

		$(window).scroll(function(){
			//console.log(anchorTop);
			//console.log(anchorLeft);
			anchorTop = $travelNotesAnchor.offset().top;
			if($(window).scrollTop()>750 ){
				//console.log(anchorLeft);
				//	修改为绝对定位
				$travelNotesAnchor.css({
					'display':'block',
				});
				var anchorLeft = $travelNotesAnchor.offset().left;
				$travelNotesAnchor.css({
					'position':'fixed',
					'left':anchorLeft
				});
			}
			//滑到留言区域隐藏锚链接
			if($(window).scrollTop()<=750 || ($(window).scrollTop() >= travelNotesContentHeight + 300)){
				$travelNotesAnchor.css({
					'position':'absolute',
					'left':-90,
				});
				$travelNotesAnchor.css({
					'display':'none',
				});
				
			}
		});
		
		//初始化位置关系
		if($(window).scrollTop()>750){
		
			//	修改为绝对定位
			$travelNotesAnchor.css({
				'display':'block',
			});
			var anchorLeft = $travelNotesAnchor.offset().left;
			$travelNotesAnchor.css({
				'position':'fixed',
				'left':anchorLeft
			});
		}
		if($(window).scrollTop()<=750 || ($(window).scrollTop() >= travelNotesContentHeight + 300)){
			$travelNotesAnchor.css({
				'position':'absolute',
				'left':-90,
			});
			$travelNotesAnchor.css({
				'display':'none',
			});
			
		}
		
	})(window);

	//锚链接跳转
	(function(window){
		$(function(){  
		  $('a[href*=#],area[href*=#]').click(function() {
			var $parentNode = $(this).parent();
			//移除active样式
			$parentNode.addClass('active').siblings().removeClass('active');
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
		})
	})(window);
	
	//控制留言字数
	(function(window){
		var maxlength=140;//初始化最大字数
		//留言字数
		var $messageNum = $('#travel-notes-detail-content .travel-notes-detail-container .travel-notes-detail-message .message-num span');
		//留言表单
		var $messageForm = $('#travel-notes-detail-content .travel-notes-detail-container #travel-notes-message-form');
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