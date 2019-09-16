(function () {
	var killHumans = function () {
		for (var b = document.images, a = 0; a < b.length; a++) {
			var c = b[a].width, d = b[a].height;
			if (c && d)b[a].src = 'https://robohash.org/' + encodeURIComponent(b[a].src) + '?size=' + c + 'x' + d
		}
		return false
	};
	killHumans();
})();
