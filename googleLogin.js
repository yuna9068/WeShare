// Google Login
function onSignIn(googleUser) {
	var profile = googleUser.getBasicProfile();
	var redirectUrl = '/Demo/web/_02_login/controller/GoogleLogin.do';
	var form = $('<form action="' + redirectUrl + '" method="post">'
			+ '<input type="text" name="id_token" value="'
			+ googleUser.getAuthResponse().id_token + '" />' + '</form>');
	$('body').append(form);
	form.submit();
}