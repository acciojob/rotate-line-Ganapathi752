//your JS code here. If required.


///html
<!DOCTYPE html>

<html>

<head>
	<link rel="stylesheet" href="styles.css">
</head>

<body>
	<!-- the entire body must be written by student -->
	<div id="line"></div>
    <script type="text/javascript" src="./script.js"></script>

</body>

</html>


//css
/*  your css code here. If applicable */
body{
	height: 100vh;
	width: 100vw;
	margin: 0;
	padding: 0;
	display:flex;
	justify-content:center;
	align-content:center;
}

#line{
	background-color:black;
	width: 200px;
	height:2px;
	position:absolute;
	top: 50%;
	left:50%;
}

//js
//your JS code here. If required.
const line = document.getElementById("line")
let angleRot = 2

setInterval(function (){
	line.style.transform = ⁠ translate(${-50}%,${-50}%) rotate(${angleRot}deg) ⁠
	angleRot += 2
}, 20)