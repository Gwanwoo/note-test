// 이곳에 코드를 작성하세요 
var $BtNewClear = $('#BtNewClear');
var $BtFullScreen = $('#BtFullScreen');
var $BtSaveFile =$('#BtSaveFile');
var elem = document.getElementsByClassName('note-editor')[0];
var $contents = $('#contents');


$BtNewClear.click(function() {
	clearSave();
	console.log('submit');
});

$BtFullScreen.click(function(){
	 if (screenfull.enabled) {
	        screenfull.request(elem);
	    }
})

$BtSaveFile.click(function(){
	console.log("파일을 저장합니다.");
	var storedContent=$contents.code();
	 var blob = new Blob([storedContent], {type: "text/plain;charset=utf-8"});
	 saveAs(blob, "myNote.txt");
})

