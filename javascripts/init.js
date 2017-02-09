/**
 *  @function init
 *  Initializes the game and hides the Description div.
 */
function init() {
    var stage = new createjs.Stage("main");
    Description.value = '';
    ImageSource.value = '';
    console.log(Description.value);
    console.log(ImageSource.value);
	Description.style.display = 'none';
    ImageSource.style.display = 'none';
	var fileInput = $('#files');
	var uploadButton = $('#upload');
	

	uploadButton.on('click', function() {
		if (!window.FileReader) {
			alert('Your browser is not supported');
			return false;
		}
		var input = fileInput.get(0);

		// Create a reader object
		var reader = new FileReader();
		reader.top = 100;
		reader.left = 100;
		if (input.files.length) {
			var textFile = input.files[0];
			// Read the file
			reader.readAsText(textFile);
			// When it's loaded, process it
			$(reader).on('load', processFile);
		} else {
			alert('Please upload a file before continuing')
		} 
	});
    game.setStage(stage);
    eventLoadMap();
    //game.start();
}

function processFile(e) {
	var file = e.target.result,
		results;
	if (file && file.length) {
		results = file.split("\n");
		$('#name').val(results[0]);
		$('#age').val(results[1]);
	}
}