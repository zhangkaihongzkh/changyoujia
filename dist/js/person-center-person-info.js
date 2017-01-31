$(function(){
	//表单校验
	(function(window){
		$().ready(function() {
			//留言表单
			var $messageForm = $('#person-center-person-info-content .person-info-change-wrapper #person-info-change-form');
			// 在键盘按下并释放及提交后验证提交表单
		  $messageForm.validate({
		  	//显示位置
		  	errorPlacement: function(error, element) {  
				    error.appendTo(element.parent());  
				},
		    rules: {
		      userName: "required",
		      realName: "required",
		      userEMail: "required",
		      userSignature: "required",
		      userName: {
		        required: true,
		        minlength: 2
		      },
		      realName: {
		      	required: true,
		        minlength: 2
		      },
		      userEMail: {
		        required: true,
		        email: true
		      },
		      userSignature: {
		        required: true,
		        minlength: 0
		      },
		    },
		    messages: {
		      userName: "请输入您的用户昵称",
		      realName: "请输入您的真实姓名",
		      username: {
		        required: "请输入用户名",
		        minlength: "用户昵称必需至少两个字母组成"
		      },
		      userEMail: "请输入一个正确的邮箱",
		      userSignature: "请输入您的个性签名",
		    }
			});
		});

	})(window);
	
	//字数限定
	//控制个性签名字数
	(function(window){
		
		var maxlength=16;//初始化最大字数
		//留言字数
		var $messageNum = $('#person-center-person-info-content .person-info-change-wrapper #person-info-change-form .signature-num span');
		//留言表单
		var $messageForm = $('#person-center-person-info-content .person-info-change-wrapper #person-info-change-form');
		//留言输入框
		var $textarea = $messageForm.find('textarea');
		$textarea.on('keyup',function(){
			var l = $(this).val().length;
			$messageNum.text(maxlength - l);//还可以输入多少个
			//字数超出
			if(parseInt($messageNum.text()) < 0){
				$messageNum.text(0);//强制字数
				var val=$(this).val().substring(0,maxlength);/*截取指定的字符串，左闭右开*/
				$(this).val(val);
			}
		});
	})(window);
});;