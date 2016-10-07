define(['app/js/start.js', 'app/js/es6.js'], function(start, es6) {
	const name = document.querySelector('.name');
	name.innerHTML = 'AMD MODULE';
	console.log(start.hello());
});