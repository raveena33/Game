$(document).ready(function(){
	$("#registerForm").submit(function(){
		var flag=true;
		if (!checkUname()) {
			flag=false;
		}
		if (!checkPwd()) {
			flag=false;
		}
		if (!checkEmail()) {
			flag=false;
		}
		return flag;
	});
	$("#user").blur(checkUname);
	$("#pwd").blur(checkPwd);
	$("#repwd").blur(doubleCheck);
	$("#email").blur(checkEmail);
	$("#clearAll").click(function(){
		$("#userId").html("");
		$("#pwdId").html("");
		$("#repwdId").html("");
		$("#emailId").html("");
	});
});
	
	function checkUname(){
		var userName=$("#user").val();
		var $div=$("#userId");
		if (userName=="") {
			$div.html("user name can not be empty");
			return false;
		}
		$div.html("");
		return true;
	}
	function checkPwd(){
		var pwd=$("#pwd").val();
		var $pwd=$("#pwdId");
		if (pwd.length<6||pwd.length>12) {
			$pwd.html("password should be 6-12 digits");
			return false;
		};
		$pwd.html("");
		return true;
	};
	function doubleCheck(){
		var pwd=$("#pwd").val()
		var repwd=$("#repwd").val();
		if(repwd!=pwd){
			$("#repwdId").html("please confirm your password");
			return false;
		};
		$("#repwdId").html("");
		return true;
	}
	function checkEmail(){
		var email=$("#email").val();
		var $div=$("#emailId");
		if (email.indexOf("@")==-1||email.indexOf(".")==-1) {
			$div.html("email must contains @ and .");
			return false;
		}
		$div.html("");
		return true;
	};