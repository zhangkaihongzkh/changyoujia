$(function(){

	//广告区域的轮播
	(function(window){
		
		var mainAdSwiper = new Swiper ('#main-ad .swiper-container', {
		    direction: 'horizontal',
		    loop: true,
		    simulateTouch:false,//鼠标无效
		    speed:1000,//速度
		    effect : 'fade',
			fade: {
			  crossFade: false,
			},
		    //autoplay:2000,//自动播放
		    
		    // 如果需要前进后退按钮
		    nextButton: '#main-ad .swiper-button-next',
		    prevButton: '#main-ad .swiper-button-prev',
		    
		})       
	})(window);

	//加载日历控件
	(function(window){
		var $parameterForm = $('#travel-parameter-form');//获取到表单
		var $dateWrapper = $parameterForm.find('.travel-form-date .date-wrapper');					//详细日期
		var $travelDate = $dateWrapper.find('#travel-date');

		/*$travelDate.RendezVous({
		    
		});*/
		//中文显示
		$travelDate.RendezVous({
		    i18n: {
		        calendar: {
		            month: {
		                previous: '上一月',
		                next:     '下一月',
		                up:       '选择月份'
		            },
		            year: {
		                previous: '上一年',
		                next:     '下一年',
		                up:       '选择年份'
		            },
		            decade: {
		                previous: '上十年',
		                next:     '下十年',
		                up:       '选择日期'
		            }
		        },
		        days: {
		            abbreviation: {
		                monday:    '一',
		                tuesday:   '二',
		                wednesday: '三',
		                thursday:  '四',
		                friday:    '五',
		                saturday:  '六',
		                sunday:    '日'
		            },
		            entire: {
		                monday:    '星期一',
		                tuesday:   '星期二',
		                wednesday: '星期三',
		                thursday:  '星期四',
		                friday:    '星期五',
		                saturday:  '星期六',
		                sunday:    '星期日'
		            }
		        },
		        months: {
		            abbreviation:
		            {
		                january:   '一月',
		                february:  '二月',
		                march:     '三月',
		                april:     '四月',
		                may:       '五月',
		                june:      '六月',
		                july:      '七月',
		                august:    '八月',
		                september: '九月',
		                october:   '十月',
		                november:  '十一月',
		                december:  '十二月'
		            },
		            entire: {
		                january:   '一月',
		                february:  '二月',
		                march:     '三月',
		                april:     '四月',
		                may:       '五月',
		                june:      '六月',
		                july:      '七月',
		                august:    '八月',
		                september: '九月',
		                october:   '十月',
		                november:  '十一月',
		                december:  '十二月'
		            }
		        }
		    },
		    //显示格式
		    formats: {
		        display: {
		            //date: '%Day-%d-%Month-%Y'
		            date: '%Y-%Month-%d'
		        }
		    }
		});

	})(window);


	//商品列表参数选择
	(function(window){
		var $parameterForm = $('#travel-parameter-form');//获取到表单
		var $destinationWrapper = $parameterForm.find('.travel-form-destination .destination-wrapper');//目的地容器
		var $monthWrapper = $parameterForm.find('.travel-form-month .month-wrapper');				//月份容器
		var $priceWrapper = $parameterForm.find('.travel-form-price .price-wrapper');				//价格容器
		var $dateWrapper = $parameterForm.find('.travel-form-date .date-wrapper');					//详细日期
		
		//隐藏表单值
		var $destinationSelect = $parameterForm.find('#destination-select');//目的地选择的对应表单
		var $monthSelect = $parameterForm.find('#month-select');			//月份地选择的对应表单
		var $priceSelect = $parameterForm.find('#price-select');			//价格选择的对应表单
		var $dateSelect = $parameterForm.find('#date-select');				//具体日期选择的对应表单
		 

		//点击不同li修改active样式，同时将值传入对应的隐藏表单中
		//目的地选择
		$destinationWrapper.find('li').each(function(){
			var m = $(this);	//选中的li

			m.on('click',function(){
				var mVlaue = m.text();
				m.addClass('active').siblings().removeClass('active');
				//console.log(mVlaue);
				//修改对应表单值
				$destinationSelect.val(mVlaue);
				console.log($destinationSelect.val());
			})
		});

		//月份选择
		$monthWrapper.find('li').each(function(){
			var m = $(this);	//选中的li

			m.on('click',function(){
				var mVlaue = m.text();
				m.addClass('active').siblings().removeClass('active');
				//console.log(mVlaue);
				//修改对应表单值
				$monthSelect.val(mVlaue);
				console.log($monthSelect.val());
			})
		});

		//价格区间选择
		$priceWrapper.find('li').each(function(){
			var m = $(this);	//选中的li

			m.on('click',function(){
				var mVlaue = m.text();
				m.addClass('active').siblings().removeClass('active');
				//console.log(mVlaue);
				//修改对应表单值
				$priceSelect.val(mVlaue);
				console.log($priceSelect.val());
			})
		});

		/*//具体日期选择,修改上传表单值
		$dateWrapper.find('#travel-date button').each(function(){
			var dateVal =  $('#travel-date .rendezvous-input-date').val();	//获取到日期表单值
			var m = $(this);	//选中日期
			m.on('click',function(){
				dateVal =  $('#travel-date .rendezvous-input-date').val();	//获取到日期表单值
				$dateSelect.val(dateVal);
				console.log($dateSelect.val());
			});
		});*/
	})(window);

	//商品列表分页插件
	(function(window){
		//这是一个非常简单的demo实例，让列表元素分页显示
		//回调函数的作用是显示对应分页的列表项内容
		//回调函数在用户每次点击分页链接的时候执行
		//参数page_index{int整型}表示当前的索引页
		var productListInitPagination = function() {
			var num = 60;
			//获取到ul下有多少个li，现在为了展示效果，没有用获取，而是手动设定，后台开发可以通过num_entries获取li的个数
			//将num 修改为num_entries
			var num_entries = $("#product-list-content .product-list-main .product-list-wrapper  li.product-list-item").length;
			// 创建分页
			$("#product-list-content .product-list-main .pagination-container").pagination(num, {
				num_edge_entries: 1, //边缘页数
				num_display_entries: 4, //主体页数
				callback: pageselectCallback,
				items_per_page:9, //每页显示9项
				prev_text: "上一页",
				next_text: "下一页",
			});
		 }();

		function pageselectCallback(page_index, jq){
			
			var new_content = $("#product-list-content .product-list-main .product-list-wrapper  li.product-list-item").clone();
			
			$(".product-list-searchresult").empty().append(new_content); //`装载对应分页的内容
			return false;
		}
	})(window);
});