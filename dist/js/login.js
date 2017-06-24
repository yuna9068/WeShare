$(function(){
	console.log("loginOk = " + loginOk, "indname = " + indname, "indid = " + indid);
	if (indname == ""){
		$(".afterLogin").css("display", "none");
	} else {
		$(".beforeLogin").css("display", "none");
		$(".afterLogin").css("display", "block");
	}
});