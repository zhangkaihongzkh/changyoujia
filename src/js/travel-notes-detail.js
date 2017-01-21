$(function(){
	//左侧滚动条固定
	(function(window){
		var travelNotesAnchor = $('#travel-notes-detail-content .travel-notes-container-anchor')
		var anchorTop = travelNotesAnchor.offset().top;
		

		$(window).scroll(function(){
			console.log(anchorTop);
			console.log(anchorLeft);
			
			if($(window).scrollTop()>750){
				console.log(anchorLeft);
				//	修改为绝对定位
				travelNotesAnchor.css({
					'display':'block',
				});
				var anchorLeft = travelNotesAnchor.offset().left;
				travelNotesAnchor.css({
					'position':'fixed',
					'left':anchorLeft
				});
			}
			if($(window).scrollTop()<=750){
				travelNotesAnchor.css({
					'position':'absolute',
					'left':-90,
				});
				travelNotesAnchor.css({
					'display':'none',
				});
				
			}
		});
	})(window);
	
});