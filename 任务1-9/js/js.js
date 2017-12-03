var wrap = document.getElementsByClassName('wrap')[0];
var imgs = wrap.getElementsByTagName('a');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var i = 0;
function imgTab(){
	imgs[i%9].style.display = 'none';
	i++;
	imgs[i%9].style.display = 'block';
}
var m = setInterval(imgTab,2000);
wrap.onmouseover = function(){
	clearInterval(m);  
}
wrap.onmouseout = function(){
	timer = setInterval(imgTab,2000);
}
prev.onclick = function(){
	imgs[i%9].style.display = 'none';
	i--;
	if (i < 0) {
		i = 8;
	};
	imgs[i%9].style.display = 'block';
}
next.onclick = function(){
	imgTab();
}