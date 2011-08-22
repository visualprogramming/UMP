$(document).ready(function() {
	var v = document.createElement("video");
	if (!v.play)
	{
		var params = {
			allowfullscreen: "true",
			allowscriptaccess: "always"
		};
		var flashvars = {
			file: "video.f4v",
			image: "snapshot.jpg"
		};
		swfobject.embedSWF("player.swf", "ump", "480", "272", "9.0.0", "expressInstall.swf", flashvars, params);
	}
});