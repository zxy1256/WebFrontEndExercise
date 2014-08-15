var spa = (function() {
	var initModule = function ($container) {
		$container.html(
			'<h1>Hello world</h1>'
		);
	};

	return {initModule: initModule};
}());