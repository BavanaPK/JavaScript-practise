(function(window) {

	var speakWord = "GoodBye";
	var byeSpeaker = function (names) {
  		console.log(speakWord + " " + names);
	}
	
	window.byeSpeaker = byeSpeaker;

})(window);