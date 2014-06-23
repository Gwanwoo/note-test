var $contents = $('#contents');

function createKey(){
	var key = 'mynote';
	return key;
}

var selectedKey = createKey();

function autoSave(event){
	window.localStorage.setItem(selectedKey, getHtmlCode());
}
function autoLoad(event){
	 setHtmlCode( window.localStorage.getItem(selectedKey) );
}
function clearSave(event){
	window.localStorage.setItem(selectedKey, " ");
}

function loadLocalStorage(event){
	var value = $(event.currentTarget).val();
	setHtmlCode( window.localStorage.getItem(value) );
}

function toggle_between_fullscreen(target) {
	if (screenfull.enabled) {
		screenfull.toggle(target);
		console.log("bb");
	}
	
}
//-------------------------------------------------


initHtmlEditor();




// $('.about').on('click',function(){
// 	$('#aboutModal').modal();
// })
