//your JS code here. If required.


const line = document.getElementById("line")
let angleRot = 2

setInterval(function (){
	line.style.transform = ⁠ translate(${-50}%,${-50}%) rotate(${angleRot}deg) ⁠
	angleRot += 2
}, 20)