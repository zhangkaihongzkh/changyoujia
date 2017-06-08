$(function() {
    //城市选择dom操作
    (function(window) {
        //获取到城市选择区域
        var $selectPlaceWrapper = $('#main-ad .select-place');
        var $selectPlaceName = $selectPlaceWrapper.find('.select-place-name'); //城市
        var $cityName = $selectPlaceWrapper.find('.city-name'); //当前选中的城市
        var $arrow = $selectPlaceWrapper.find('.select-place-arrow'); //箭头
        var $selectPlaceItemWrapper = $selectPlaceWrapper.find('.select-place-item'); //其他城市
        var $selectPlaceItem = $selectPlaceItemWrapper.find('li'); //每一个城市

        $selectPlaceName.hover(function() {
            $selectPlaceItemWrapper.stop().slideDown();

        }, function() {
            $selectPlaceItemWrapper.stop().slideUp();
        });

        $selectPlaceItem.on('click', function() {
            var $this = $(this);
            var $currentCityName = $this.html();
            console.log($currentCityName);
            $this.addClass('selected').siblings().removeClass('selected'); //移除选中城市的名称
            $cityName.html($currentCityName);
        });

    })(window);

    //广告区域的轮播
    (function(window) {

        var mainAdSwiper = new Swiper('#main-ad .swiper-container', {
            direction: 'horizontal',
            loop: true,
            simulateTouch: false, //鼠标无效
            speed: 1000, //速度
            effect: 'fade',
            fade: {
                crossFade: false,
            },
            autoplay: 2000, //自动播放

            // 如果需要前进后退按钮
            nextButton: '#main-ad .swiper-button-next',
            prevButton: '#main-ad .swiper-button-prev',

        })
    })(window);

    //侧边栏动画效果
    (function(window) {
        //动态修改侧边栏的值
        var windowWidth = $(document).width();
        var windowHeight = $(window).height();

        //回到顶部
        $(window).scroll(function() {
            if ($(window).scrollTop() > windowHeight) {
                $('#sidebar .sidebar-top').css({
                    'display': 'block',

                });
            } else {
                $('#sidebar .sidebar-top').css({
                    'display': 'none',
                });
            }
        });

        $('#sidebar .sidebar-top').on('click', function() {
            $('body,html').animate({ scrollTop: 0 }, 1000);
            return false;
        });

        //关闭按钮
        $('#sidebar .sidebar-close').on('click', function() {
            $('#sidebar .sidebar-list').slideToggle();
            $('#sidebar .sidebar-list-down').css({ 'display': 'block' });
        });
        //下拉按钮
        $('#sidebar .sidebar-down').on('click', function() {
            $('#sidebar .sidebar-list-down').css({ 'display': 'none' });
            $('#sidebar .sidebar-list').slideToggle();

        });

        //用户
        $('#sidebar .sidebar-user').on('mouseover', function() {
            $('.user-center').css({
                'display': 'block',
            });
            $('#sidebar .user-center').stop().animate({
                opacity: 1,
            }, 400);
        });
        $('#sidebar .sidebar-user').on('mouseout', function() {
            $('.user-center').css({
                'display': 'none',
            });
            $('#sidebar .user-center').stop().animate({
                opacity: 0,
            }, 400);
        });

        //客服中心联系
        $('#sidebar .sidebar-phone').on('mouseover', function() {
            $('.contact-phone').css({
                'display': 'block',
            });
            $('.contact-phone').stop().animate({
                opacity: 1,
            }, 400);
        });
        $('#sidebar .sidebar-phone').on('mouseout', function() {
            $('.contact-phone').css({
                'display': 'none',
            });
            $('.contact-phone').stop().animate({
                opacity: 0,
            }, 400);
        });

    })(window);

    //左侧导航栏效果
    (function(window) {
        var $HomeSidebarLeft = $('#sidebar-left');


        var $HomeAnchor = $('#sidebar-left .sidebar-left-container-anchor'); //锚链接容器

        var anchorTop = $HomeAnchor.offset().top; //锚链接顶部距离



        var dTop = $(document).scrollTop(); //文档高度
        //console.log(travelNotesContentHeight);
        var currentId = ""; //滚动条现在所在位置的item id
        var $homeSideBaritem = $('.home-item-content'); //每天的游记内容



        


        // 监听导航栏事件 
        $(window).scroll(function() {

            anchorTop = $HomeAnchor.offset().top;
            dTop = $(document).scrollTop();
            console.log(dTop);
            //滑到对应区域过度
            $homeSideBaritem.each(function() {
                var m = $(this);
                //注意：m.offset().top代表每一个item的顶部位置
                if (dTop > m.offset().top - 100) {
                    currentId = '#' + m.attr('id');
                    //console.log(currentId);
                } else {
                    return false;
                }
            });
            //根据滑动距离修改锚链接的active样式
            var currentLink = $HomeAnchor.find('.active');
            if (currentLink && currentLink.attr("href") != currentId) {
                currentLink.removeClass('active');
                $HomeAnchor.find("[href=" + currentId + "]").parent().addClass('active');
            }

            if ($(window).scrollTop() > 600) {
                //console.log(anchorLeft);
                //	修改为绝对定位，兼容不同分辨率用户，位置通过初始化获取到
                $HomeAnchor.css({
                    'display': 'block',
                });
                var anchorLeft = $HomeAnchor.offset().left;
                $HomeAnchor.css({
                    'position': 'fixed',
                    'left': anchorLeft
                });
            }
            //滚动到一定区域展现导航栏
             if ($(window).scrollTop() <= 600) {
                 
                 $HomeAnchor.css({
                     'display': 'none',
                 });

             }
        });
    })(window);

    //锚链接跳转
    (function(window) {
        $(function() {   
            $('a[href*=#],area[href*=#]').click(function() {
                var $parentNode = $(this).parent();    
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {      
                    var $target = $(this.hash);      
                    $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');      
                    if ($target.length) {        
                        var targetOffset = $target.offset().top;        
                        $('html,body').animate({           scrollTop: targetOffset         },         800);        
                        return false;      
                    }    
                }  
            });
        })
    })(window);

    //单季热销轮播区域
    (function(window) {
        var singleHotSwiper = new Swiper('#single-hot .swiper-container', {
            direction: 'horizontal',
            loop: true,

            // 如果需要分页器
            pagination: '#single-hot .swiper-pagination',
            paginationClickable: true,
            speed: 500, //速度
            simulateTouch: false, //鼠标无效

        });
    })(window);

    //精选优惠轮播区域
    (function(window) {
        var carefulChosenSwiper = new Swiper('#careful-chosen .swiper-container', {
            direction: 'horizontal',
            loop: true,
            speed: 500, //速度
            simulateTouch: false, //鼠标无效

            // 如果需要前进后退按钮
            nextButton: '#careful-chosen .swiper-button-next',
            prevButton: '#careful-chosen .swiper-button-prev',
        });
    })(window);

    //走过区域轮播
    (function(window) {
        //数据名称                                                          
        var dataName = ['国内游', '国外游', '周边游', '户外徒步游'];

        var throughScenerySwiper = new Swiper('#through-scenery .swiper-container', {
            direction: 'horizontal',
            loop: true,

            // 如果需要分页器
            pagination: '#through-scenery .swiper-pagination',
            paginationClickable: true,
            speed: 500, //速度
            simulateTouch: false, //鼠标无效

            //自定义分页器内容
            paginationBulletRender: function(swiper, index, className) {
                //修改内容
                return '<span class="' + className + '">' + dataName[index] + '</span>';
            },
        });
    })(window);

    //游记轮播区域
    (function(window) {
        var travelNotesSwiper = new Swiper('#travel-notes .swiper-container', {
            direction: 'horizontal',
            loop: true,

            // 如果需要分页器

            paginationClickable: true,
            speed: 600, //速度
            simulateTouch: false, //鼠标无效
            // 如果需要分页器
            pagination: '#travel-notes .swiper-pagination',

            effect: 'coverflow',
            slidesPerView: 2,
            centeredSlides: true,
            coverflow: {
                rotate: 30,
                stretch: 10,
                depth: 250,
                modifier: 2,
                slideShadows: true
            }
        });
    })(window);

    //领队轮播区域
    (function(window) {
        var teamLeaderSwiper = new Swiper('#team-leader .swiper-container', {
            pagination: '#team-leader .swiper-pagination',
            paginationClickable: true,
            slidesPerView: 5,
            simulateTouch: false, //鼠标无效
            nextButton: '#team-leader .swiper-button-next',
            prevButton: '#team-leader .swiper-button-prev',

        });
    })(window);
});
