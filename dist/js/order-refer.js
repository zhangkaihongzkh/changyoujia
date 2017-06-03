$(function() {
    //右侧固定
    (function(window) {
        var $aside = $('.order-fill-aside');
        var $main = $aside.siblings(); //通过主要内容来定位
        var mainWidth = $main.width();
        var top = $aside.offset().top; //侧边栏距离顶部距离
        var left = $main.offset().left + mainWidth + 20; //距离左侧距离为 main 距离左侧 + main宽度+ 20
        //console.log(left);
        //console.log(mainWi$maindth);
        //console.log($main);
        var windowTop = $(window).scrollTop(); //滚动条距离
        $(window).scroll(function() {
            //console.log(top);
            windowTop = $(window).scrollTop();
            //console.log(windowTop);
            //console.log(left);

            if (windowTop > top - 30) {
                $aside.css({
                    position: 'fixed',
                    top: 30,
                    left: left
                })
            } else {
                $aside.css({
                    position: 'absolute',
                    top: top,
                    left: left
                })
            }

        });
        $(window).resize(function() {
            if (windowTop > top - 30) { //在fixed时进行窗口缩放 top为 30，
                $aside.css({
                    top: 30,
                });
            } else { //在absolute时进行窗口缩放 top为 初始top值
                $aside.css({
                    top: top,
                });
            }
            //top = $aside.offset().top;
            left = $main.offset().left + mainWidth + 20;
            console.log(left);
            windowTop = $(window).scrollTop();
            $aside.css({
                left: left
            })
            $(window).scroll(function() {
                //console.log(top);
                windowTop = $(window).scrollTop();
                //console.log(windowTop);
                //console.log(left);

                if (windowTop > top - 30) {
                    $aside.css({
                        position: 'fixed',
                        top: 30,
                        left: left
                    })
                } else {
                    $aside.css({
                        position: 'absolute',
                        top: top,
                        left: left
                    })
                }

            });
        })
    })(window);
    //点击收起展开明细
    (function(window) {
        //获取到协议内容
        var $regulationsWrapper = $('.regulations-detail');
        //获取到点击部分
        var $regulationsBtn = $regulationsWrapper.find('.regulations-retract');
        $regulationsBtn.on('click', function() {
            var $this = $(this); //保存当前按钮
            var $thisRegulationsWrapper = $this.parent().parent(); //获取当前父元素容器 
            if ($thisRegulationsWrapper.hasClass('deploy')) { //当前为展开状态
                $thisRegulationsWrapper.removeClass('deploy').addClass('pick-up');
                var $content = $thisRegulationsWrapper.find('.regulations-content'); //获取到内容区域
                $content.slideUp(); //收起内容
                $this.html('展开明细<b></b>');
                $this.find('b').css({
                    "transform": "rotate(180deg)",
                });
            } else if ($thisRegulationsWrapper.hasClass('pick-up')) { //当前为收起状态
                $thisRegulationsWrapper.removeClass('pick-up').addClass('deploy');
                var $content = $thisRegulationsWrapper.find('.regulations-content'); //获取到内容区域
                $content.slideDown(); //展开内容
                $this.html('展开明细<b></b>');
            }
        });
    })(window);

    //确认订单弹出层
    (function(window) {
        //获取到确认订单按钮
        var $confirmBtn = $("#order-refer-content .amount-submit-btn");
        //console.log($confirmBtn);
        $confirmBtn.click(function() {
    
            layer.confirm('请在新开网上储蓄卡页面完成付款后再做选择', {
                btn: ['已完成充值', '充值遇到问题'] //按钮
            }, function() {
                layer.msg('充值成功！', { icon: 1 });
            }, function() {
                layer.msg('您可以通过以下方式联系我们', {
                    time: 20000, //20s后自动关闭
                    btn: ['拨打人工电话 xxx', '重新充值']
                });
            });
        });

    })(window);
});
