// 이곳에 코드를 작성하세요 
var $BtNewClear = $('#BtNewClear');
var $BtFullScreen = $('#BtFullScreen');
var $BtSaveFile = $('#BtSaveFile');
var $contents = $('#contents');
var storedContent = $contents.code();

function toggle_fullscreen() {
	if (screenfull.enabled) {
		screenfull.toggle();
	}
}

function save_local_place(contents) {
	var storedContent = contents.code();
	var blob = new Blob([ storedContent ], {
		type : "text/plain;charset=utf-8"
	});
	saveAs(blob, "myNote.txt");
}




$BtNewClear.click(clearSave()); // clearSave(); in app.js;

$BtFullScreen.click(function() {
	if (screenfull.enabled) {
		screenfull.toggle();
	}
});//$BtFullScreen.click(toggle_fullscreen());

$BtSaveFile.click(function() {
	var blob = new Blob([ storedContent ], {
		type : "text/plain;charset=utf-8"
	});
	saveAs(blob, "myNote.txt");
})//$BtSaveFile.click(save_local_place());
