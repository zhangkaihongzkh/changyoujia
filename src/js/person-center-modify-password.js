$(function(){
	//修改表单校验
	(function(window){
		$().ready(function() {
			//留言表单
			var $messageForm = $('#person-center-modify-password-content .person-info-change-wrapper #person-modify-password-form');
			// 在键盘按下并释放及提交后验证提交表单
		  $messageForm.validate({
		  	//显示位置
		  	errorPlacement: function(error, element) {  
				    error.appendTo(element.parent());  
				},
		    rules: {
		      oldPassWord: "required",
		      newPassWord: "required",
		      conNewPass: "required",
		      userSignature: "required",
		      oldPassWord: {
		        required: true,
		        minlength: 5,
		      },
		      newPassWord: {
		      	required: true,
        		minlength: "密码长度不能小于 5 个字母",
        		minlength: 5,
		      },
		      conNewPass: {
		        required: true,
		        minlength: "密码长度不能小于 5 个字母",
		        equalTo: "#newPassWord",
		        minlength: 5
		      },
		    },
		    messages: {
		      oldPassWord: "请输入原始密码",
		      newPassWord: "请输入新密码",
		      oldPassWord: {
		        required: "请输入原始密码",
		        minlength: "原始密码必需至少5个字符组成"
		      },
		      newPassWord: {
		        required: "请输入新密码",
		        minlength: "新密码必需至少5个字符组成"
		      },
		      conNewPass: {
		        required: "请确认请新密码",
		        minlength: "密码长度不能小于 5 个字母",
		        equalTo: "两次密码输入不一致"
		      },
		    }
			});
		});

	})(window);
	
	
});;