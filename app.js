function fire() {
	var f = document.createElement("img");
	f.src = "fire.png";
	f.style.transform = "rotate(-90deg)";
	f.style.position = "absolute";
	f.style.height="120vh";
	f.style.left="2%";
	f.style.top="-17vh";
	document.body.appendChild(f);
	if (document.getElementsByClassName("ply")[1].innerText == "Bend") {
		your_life=your_life-35;
		document.getElementById("YourLife").value=your_life;
	}
	if (your_life < 1) {
		window.location ="lost.html";
	}
	setTimeout(function() {
		document.body.removeChild(f);
	},2000);
}
your_life=100;
dragon_life = 100;
function bt() {
	for (var i=0; i < document.getElementsByClassName("bullet").length; i++) {
		document.getElementsByClassName("bullet")[i].style.left=parseInt(document.getElementsByClassName("bullet")[i].style.left)+2+"%";
		//console.log(document.getElementsByClassName("bullet")[i].style);
		if (parseInt(document.getElementsByClassName("bullet")[i].style.left) > 58) {
			document.getElementsByClassName("bullet")[i].remove();
			dragon_life = dragon_life - 4;
			document.getElementById("DragonLife").value = dragon_life;
		}
	}
	if (dragon_life < 1) {
		window.location ="won.html";
	}
}
function shoot() {
	if (document.getElementsByClassName("ply")[1].innerText == "Bend") {
		var a = document.createElement("img");
		a.className="bullet";
		a.src="bullet.png"
		a.style="position: absolute;height: 2vh;left:13% ;top:58vh;"
		document.body.appendChild(a);
	} else {
		var a = document.createElement("img");
		a.className="bullet";
		a.src="bullet.png"
		a.style="position: absolute;height: 2vh;left:13% ;top:69vh;"
		document.body.appendChild(a);
	}
}
function bend() {
	if (document.getElementsByClassName("ply")[1].innerText == "Bend") {
		document.getElementById('s-img').src="down.png";
		document.getElementById('s-img').style.height="19vh"
		document.getElementById('s-img').style.top = "60vh"
		document.getElementsByClassName("ply")[1].innerText = "up";
	} else {
		document.getElementById('s-img').src="up.png";
		document.getElementById('s-img').style.height="30vh"
		document.getElementsByClassName("ply")[1].innerText = "Bend";
		document.getElementById('s-img').style.top = "49vh"
	}
}
function mm() {
	if (window.innerHeight > window.innerWidth) {
			fire=null;
			bt=null;
			var a = document.createElement("img");
			a.style = "width:100%";
			a.src="r.png";
			document.body.innerHTML = "<center><h1>Rotate your device</h1></center>";
			document.body.appendChild(a);
			setInterval(kk,1000);
		} else {
			setInterval(bt,50);
			setInterval(fire,4000);
		}
	}
function kk() {
	if (window.innerHeight < window.innerWidth) {
		window.location= window.location.href;
	}
}
mm();
window.onresize = mm();