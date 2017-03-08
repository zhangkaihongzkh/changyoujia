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



    //表单校验
    (function(window) {
        $().ready(function() {
            //留言表单
            var $messageForm = $('#order-fill-form');
            // 在键盘按下并释放及提交后验证提交表单
            $messageForm.validate({
                //显示位置
                errorPlacement: function(error, element) {
                    error.appendTo(element.parent());
                },
                rules: {
                    touristName: "required",
                    IDNumber: "required",
                    emergencyPhoneNumber: "required",

                    touristName: {
                        required: true,
                        minlength: 2
                    },
                    IDNumber: {
                        required: true,
                        minlength: 18,
                        maxlength: 18,
                        number: true,
                    },
                    emergencyPhoneNumber: {
                        required: true,
                        minlength: 11,
                        maxlength: 11,
                        number: true,
                    },
                },
                messages: {
                    touristName: "请输入您的用户昵称",
                    IDNumber: "请输入您的证件号码",
                    username: {
                        required: "请输入用户名",
                        minlength: "用户昵称必需至少两个字母组成"
                    },
                    IDNumber: {
                        minlength: "身份证号码位数不对",
                        maxlength: "身份证号码位数不对",
                        number: "请输入数字",
                    },
                    emergencyPhoneNumber: {
                        minlength: "手机号码位数不对",
                        maxlength: "手机号码位数不对",
                        number: "请输入数字",
                    },
                }
            });
        });

    })(window);

    //接机服务选中事件
    (function(window) {
        var $radioWrapper = $('.pick-up-service .radio-box');
        var $radioInput = $radioWrapper.find('input');
        var $pickUpDetail = $('.pick-up-service .pick-up-detail'); //表单值
        $radioInput.on('change', function() {
            var $val = $(this).val();
            //不需要接机
            if ($val == 1) {
                $pickUpDetail.css({ 'display': 'none' });
            } else if ($val == 2) {
                $pickUpDetail.css({ 'display': 'block' });
            }
        });
    })(window);

    //发票信息选中事件
    (function(window) {
        var $radioWrapper = $('.invoice-info .radio-box');
        var $radioInput = $radioWrapper.find('input');
        var $invoiceInfoDetail = $('.invoice-info .invoice-info-detail'); //表单值
        $radioInput.on('change', function() {
            var $val = $(this).val();
            //不需要接机
            if ($val == 1) {
                $invoiceInfoDetail.css({ 'display': 'none' });
            } else if ($val == 2) {
                $invoiceInfoDetail.css({ 'display': 'block' });
            }
        });
    })(window);
});
