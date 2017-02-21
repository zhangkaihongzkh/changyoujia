$(function(){
	//内容一轮播组件
	(function(window){
		//数据名称                                                          
		var dataName = ['东北','坝上','新疆','甘南','川藏','云南','其他'];
		var singleHotSwiper = new Swiper ('#section-one .swiper-container', {
		    direction: 'horizontal',//切换方向
		    loop: true,//loop模式：会生成第一个slide接在最后一个slide后面
		    
		    // 如果需要分页器
		    pagination: '#section-one .swiper-pagination',
		    paginationClickable :true,
		    speed:500,//速度
		    simulateTouch:false,//鼠标无效
				
		 
		    //自定义分页器内容
		    paginationBulletRender: function (swiper, index, className) {
		    	//修改内容
	            return '<span class="' + className + '">' + dataName[index] + '</span>';
	        },
		  });    
	})(window);

	//内容二轮播组件
	(function(window){
		//数据名称                                                          
		var dataName = ['东北','坝上','新疆','甘南','川藏','云南','其他'];
		var singleHotSwiper = new Swiper ('#section-two .swiper-container', {
		    direction: 'horizontal',//切换方向
		    loop: true,//loop模式：会生成第一个slide接在最后一个slide后面
		    
		    // 如果需要分页器
		    pagination: '#section-two .swiper-pagination',
		    paginationClickable :true,
		    speed:500,//速度
		    simulateTouch:false,//鼠标无效
				
		    //切换效果
			effect : 'flip',
			flip: {
	            slideShadows : true,
	            limitRotation : true,
	        },  	
	

		    //自定义分页器内容
		    paginationBulletRender: function (swiper, index, className) {
		    	//修改内容
	            return '<span class="' + className + '">' + dataName[index] + '</span>';
	        },
		  });    
	})(window);

	//内容三轮播组件
	(function(window){
		//数据名称                                                          
		var dataName = ['东北','坝上','新疆','甘南','川藏','云南','其他'];
		var singleHotSwiper = new Swiper ('#section-three .swiper-container', {
		    direction: 'horizontal',//切换方向
		    loop: true,//loop模式：会生成第一个slide接在最后一个slide后面
		    
		    // 如果需要分页器
		    pagination: '#section-three .swiper-pagination',
		    paginationClickable :true,
		    speed:500,//速度
		    simulateTouch:false,//鼠标无效
				
			//切换效果
			effect : 'cube',
			cube: {
			  slideShadows: false,
			  shadow: false,
			},

		    //自定义分页器内容
		    paginationBulletRender: function (swiper, index, className) {
		    	//修改内容
	            return '<span class="' + className + '">' + dataName[index] + '</span>';
	        },
		  });    
	})(window);

	//内容四轮播组件
	(function(window){
		//数据名称                                                          
		var dataName = ['东北','坝上','新疆','甘南','川藏','云南','其他'];
		var singleHotSwiper = new Swiper ('#section-four .swiper-container', {
		    direction: 'horizontal',//切换方向
		    loop: true,//loop模式：会生成第一个slide接在最后一个slide后面
		    
		    // 如果需要分页器
		    pagination: '#section-four .swiper-pagination',
		    paginationClickable :true,
		    speed:500,//速度
		    simulateTouch:false,//鼠标无效
						
			
			//切换效果
			effect : 'flip',
			flip: {
	            slideShadows : true,
	            limitRotation : true,
	        },  	

		    //自定义分页器内容
		    paginationBulletRender: function (swiper, index, className) {
		    	//修改内容
	            return '<span class="' + className + '">' + dataName[index] + '</span>';
	        },
		  });    
	})(window);

	//内容五轮播组件
	(function(window){
		//数据名称                                                          
		var dataName = ['东北','坝上','新疆','甘南','川藏','云南','其他'];
		var singleHotSwiper = new Swiper ('#section-five .swiper-container', {
		    direction: 'horizontal',//切换方向
		    loop: true,//loop模式：会生成第一个slide接在最后一个slide后面
		    
		    // 如果需要分页器
		    pagination: '#section-five .swiper-pagination',
		    paginationClickable :true,
		    speed:500,//速度
		    simulateTouch:false,//鼠标无效
				
		 
		    //自定义分页器内容
		    paginationBulletRender: function (swiper, index, className) {
		    	//修改内容
	            return '<span class="' + className + '">' + dataName[index] + '</span>';
	        },
		  });    
	})(window);
});