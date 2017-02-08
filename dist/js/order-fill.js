$(function(){
	//表单校验
	(function(window){
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
		        number:true,
		      },
		      emergencyPhoneNumber: {
		      	required: true,
		        minlength: 11,
		        maxlength: 11,
		        number:true,
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
});