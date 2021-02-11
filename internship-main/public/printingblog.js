$(document).ready(function(){

	$("#get-data-form").submit(function(e){
e.preventDefault();
		tinymce.activeEditor.setContent("<p>Hello world!</p>");
		return false;

	});

});