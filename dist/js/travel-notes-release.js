$(function(){
	//点击增加新增事件
	(function(window){
		//获取到发布按钮
		var $notesAddBtn = $('#travel-notes-release-content .releaseBtn #notesAddBtn');
		
		
		//获取到游记发布容器
		var $itemNotesWrapper = $('#travel-notes-release-content .travel-notes-wrapper');
		var $itemNote = $itemNotesWrapper.find('.travel-notes-item');
		//增加游记按钮
		var $notesAddBtn = $('#travel-notes-release-content #notesAddBtn');
		$itemNote.each(function(){
			var $closeBtn = $(this).find('.close-btn');
			$closeBtn.on('click',function(){
				//移除节点
				$(this).parent().remove();
			});
		});
		//增加游记
		$notesAddBtn.on('click',function(){
			//获取到当前游记发布的模板
			var $noteItem = $('<div class="travel-notes-item"><div class="close-btn">ｘ</div><div class="form-control"><label for="travel-notes-time">时间</label><input type="text" name="travel-notes-time"></div><div class="form-control"><label for="travel-notes-place">地点</label><input type="text" name="travel-notes-place"></div><div class="form-control notes-content"><label for="travel-notes-content">游记</label><textarea name="travel-notes-content"></textarea></div></div>');
			$itemNotesWrapper.append($noteItem);

			//为动态生成的表单绑定关闭事件
			var $itemNote = $itemNotesWrapper.find('.travel-notes-item');
			$itemNote.each(function(){
				var $closeBtn = $(this).find('.close-btn');
				$closeBtn.on('click',function(){
					//移除节点
					$(this).parent().remove();
				});
			});
		});
	})(window);
});