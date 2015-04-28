
function onStart () {
	// TODO : Add your Initialize code here
	// NOTE : In order to start your app, call "sf.start()" at the end of this function!!
	
	tabuleiroScreen = sf.scene.get('tabscreen');
	mainScreen = sf.scene.get('main');
	
	sf.scene.show('main');
	sf.scene.focus('main');
}
function onDestroy () {
	//stop your XHR or Ajax operation and put codes to destroy your application here
	
}

alert("init.js loaded.");
