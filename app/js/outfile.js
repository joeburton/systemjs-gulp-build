"bundle";
(function() {
var define = System.amdDefine;
define("app/js/start.js", [], function() {
  return {hello: function() {
      return 'Hello World';
    }};
});

})();
(function() {
var define = System.amdDefine;
define("app/js/main.js", ["app/js/start.js"], function(start) {
  var name = document.querySelector('.name');
  name.innerHTML = 'AMD MODULE';
  console.log(start.hello());
});

})();