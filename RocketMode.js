var terminalUp = -14;
var terminalDown = 14;
var transitionRate = 0.24;
var shipVelocity = 0;
var turnMagnitude = 5;

var spacedown = false;
function handleKeyUp(e) {
    if (!e) {
        var e = window.event;
    }
    if (e.keyCode == KEYCODE_SPACE) {
		createjs.Tween.removeTweens(bird);
        spacedown = false;
    }
}
function handleKeyDown(e) {
    if (!e) {
        var e = window.event;
    }
    if (e.keyCode == KEYCODE_SPACE) {
		createjs.Tween.removeTweens(bird);
        spacedown = true;
    }
}
stage.oldupdate = stage.update
function newupdate(event)
{
	stage.oldupdate(event)
	if (spacedown == true & !dead) {
		if (bird.rotation < 0) {
            rotationDelta = (-bird.rotation - 20) / 5;
        } else {
            rotationDelta = (bird.rotation + 20) / 5;
        }
		
		var velocityAssist = 0;
		if (shipVelocity >  0) { velocityAssist = (transitionRate + Math.abs(shipVelocity * 0.04)); }
		shipVelocity = shipVelocity - (transitionRate + velocityAssist);
		if (shipVelocity < terminalUp) { shipVelocity = terminalUp; }
		createjs.Tween.get(bird).to({y: bird.y + shipVelocity, rotation: shipVelocity * turnMagnitude, override: true}, rotationDelta, createjs.Ease.linear)
	}
	else {
		if (spacedown == false & !dead) {
			if (bird.rotation < 0) {
				rotationDelta = (-bird.rotation - 20) / 5;
			} else {
				rotationDelta = (bird.rotation + 20) / 5;
			}
			shipVelocity = shipVelocity + (transitionRate)
			if (shipVelocity > terminalDown) { shipVelocity = terminalDown; }
			createjs.Tween.get(bird).to({y: bird.y + shipVelocity, rotation: shipVelocity * turnMagnitude, override: true}, rotationDelta, createjs.Ease.linear)
		}
	}
}
stage.update = newupdate
document.onkeyup = handleKeyUp;
document.onkeydown = handleKeyDown;