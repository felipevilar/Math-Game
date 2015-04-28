alert('Scenemain.js loaded');

function Scenemain() {
	this.index = '';
};

Scenemain.prototype.initialize = function () {
	alert("Scenemain.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	$('#option1_bt').sfButton({
		text:'2 Jogadores'
	});
	$('#option2_bt').sfButton({
		text:'3 Jogadores'
	});
	$('#option3_bt').sfButton({
		text:'4 Jogadores'
	});
	$('#option4_bt').sfButton({
		text:'Para o Professor!'
	});
};

Scenemain.prototype.handleShow = function (data) {
	alert("Scenemain.handleShow()");
	// this function will be called when the scene manager show this scene
	this.index = 1;
	$('#option1_bt').sfButton('focus');
	
};

Scenemain.prototype.handleHide = function () {
	alert("Scenemain.handleHide()");
	// this function will be called when the scene manager hide this scene
};

Scenemain.prototype.handleFocus = function () {
	alert("Scenemain.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

Scenemain.prototype.handleBlur = function () {
	alert("Scenemain.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

Scenemain.prototype.handleKeyDown = function (keyCode) {
	alert("Scenemain.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focused
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
			this.moveUp();
			break;
		case sf.key.DOWN:
			this.moveDown();
			break;
		case sf.key.ENTER:
			this.onEnter();
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};

Scenemain.prototype.moveDown = function() {
	alert("SCENEMAIN :: MOVEDOWN "+this.index);
	
	if(this.index == 1) {
		$('#option1_bt').sfButton('blur');
		$('#option2_bt').sfButton('focus');
		this.index = 2;
	} else if(this.index == 2) {
		$('#option2_bt').sfButton('blur');
		$('#option3_bt').sfButton('focus');
		this.index = 3;
	} else if(this.index == 3) {
		$('#option3_bt').sfButton('blur');
		$('#option4_bt').sfButton('focus');
		this.index = 4;
	} else {
		alert("invalid operation");
	}
};

Scenemain.prototype.moveUp = function() {
	alert("SCENEMAIN :: MOVEUP");
	if(this.index == 4) {
		$('#option4_bt').sfButton('blur');
		$('#option3_bt').sfButton('focus');
		this.index = 3;
	} else if(this.index == 3) {
		$('#option3_bt').sfButton('blur');
		$('#option2_bt').sfButton('focus');
		this.index = 2;
	} else if(this.index == 2) {
		$('#option2_bt').sfButton('blur');
		$('#option1_bt').sfButton('focus');
		this.index = 1;
	} else {
		alert("invalid operation");
	}
};

Scenemain.prototype.onEnter = function() {
	alert("SCENEMAIN :: ONENTER");
	
	tabuleiroScreen.option = 2;
	
	sf.scene.hide('main');
	sf.scene.show('tabscreen');
	sf.scene.focus('tabscreen'); 
	
};
