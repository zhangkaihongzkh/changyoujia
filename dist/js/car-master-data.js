$(function() {
	//添加标签
	(function() {
		var $addTagsContentWrapper = $("#car-master-add-tags-content");
		var $tagsWrapper = $addTagsContentWrapper.find('.add-tags-wrapper');
		var $addBtn = $addTagsContentWrapper.find(".add-tags-button");
		$addBtn.on('click', function() {
			layer.prompt(function(value, index, elem) {
				var $liContent = $('<li class="add-tags-item selected">' + value + '</li>');
				$addBtn.before($liContent);
				layer.close(index);
				$liContent.on('click', function() {
					if ($(this).hasClass('selected')) {
						$(this).removeClass('selected');
					} else {
						$(this).addClass('selected');
					}
				});
			});
		});
	})(window);

	//点击标签样式
	(function(window) {
		//获取到点击的ul
		var $tagsWrapper = $('#car-master-add-tags-content .add-tags-wrapper');
		//获取到每一个li
		var $tagsItem = $tagsWrapper.find('li');
		$tagsItem.each(function() {
			var $item = $(this);
			$item.on('click', function() {
				if ($item.hasClass('selected')) {
					$item.removeClass('selected');
				} else {
					$item.addClass('selected');
				}
			});
		});
	})(window);
});