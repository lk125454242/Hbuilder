(function() {
	
	var validate = function(){
		
	}
	validate.prototype.v_character = function(value){
		return /\W/.test(value) || /_/.test(value)//是否包含特殊字符
	}
	validate.prototype.v_equal = function(value1, value2){
		return value1 !== value2;//是否不等
	}
	validate.prototype.v_required = function(value){
		return !/\S/.test(value)//是否为空
	}
	validate.prototype.v_noBlank = function(value){
		return /\s/.test(value);//是否包含空白
	}
	validate.prototype.v_containWord = function(value){
		return /[A-z]/.test(value);//是否不包含字母
	}
	validate.prototype.v_length = function(value, min, max){
		var length = value.length;
		return length < min || length > max;//是否越界
	}
	validate.prototype.containNumber = function(value){
		return !/\d/.test(value);
	}
	validata.prototype.v_vilidate = function(){
		
	}
})()