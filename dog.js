(function () {
	var dogs = function () {
		for (var b = document.images, a = 0; a < b.length; a++) {
			var c = b[a].width, d = b[a].height;
			if (c && d)b[a].src = 'https://placecage.net//' + c + '/' + d
		}
		return false
	};
	dogs();
})();
