var spacedown = false;
function handleKeyUp(e) {
    if (!e) {
        var e = window.event;
    }
    if (e.keyCode == KEYCODE_SPACE) {
        spacedown = false;
    }
}
function handleKeyDown(e) {
    if (!e) {
        var e = window.event;
    }
    if (e.keyCode == KEYCODE_SPACE) {
        spacedown = true;
		spacebar();
		return false;
    }
}

function preUpdate() {
	//Calls before each update
	return false;
}
function postUpdate() {
	//Calls after each update
	return false;
}

stage.oldupdate = stage.update
function newupdate(event) { preUpdate(); stage.oldupdate(event); postUpdate(); }
stage.update = newupdate
document.onkeyup = handleKeyUp; document.onkeydown = handleKeyDown;