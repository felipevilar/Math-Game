alert('Scenetabscreen.js loaded');

function Scenetabscreen() {
	this.option = '';
	this.isRotating = false;

};

Scenetabscreen.prototype.initialize = function () {
	alert("Scenetabscreen.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called
	$('#tabuleiro').sfImage({
		src:'images\\tabuleiro_x15_y150.png'
	});
};

Scenetabscreen.prototype.handleShow = function (data) {
	alert("Scenetabscreen.handleShow()");
	// this function will be called when the scene manager show this scene
};

Scenetabscreen.prototype.handleHide = function () {
	alert("Scenetabscreen.handleHide()");
	// this function will be called when the scene manager hide this scene
};

Scenetabscreen.prototype.handleFocus = function () {
	alert("Scenetabscreen.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

Scenetabscreen.prototype.handleBlur = function () {
	alert("Scenetabscreen.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

Scenetabscreen.prototype.handleKeyDown = function (keyCode) {
	alert("Scenetabscreen.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focused
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
			this.isRotating = false;
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			alert("##################: "+this.option);
			this.onEnter()
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};

Scenetabscreen.prototype.onEnter = function() {
	alert("Scenetabscreen.prototype.onEnter");
	
	if(this.isRotating == false) {	
		
		var randomNumber = Math.floor(Math.random() * 10) + 1;
		alert(randomNumber);
		
		document.getElementById("ball").style.transitionDuration = "0s";
		document.getElementById("ball").style.webkitTransform = "rotate(0deg)";
		
		if(randomNumber == 1) {			
			document.getElementById("ball").style.transitionDuration = "3s";
			document.getElementById("ball").style.webkitTransform = "rotate(2266deg)";
			this.isRotating = true;
		} else if(randomNumber == 2) {
			document.getElementById("ball").style.transitionDuration = "3s";
			document.getElementById("ball").style.webkitTransform = "rotate(2233deg)";
			this.isRotating = true;
		}
	}
	
}