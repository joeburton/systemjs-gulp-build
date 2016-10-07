define(['app/js/start.js'], function(start) {
	var name = document.querySelector('.name');
	name.innerHTML = 'AMD MODULE';
	console.log(start.hello());
});