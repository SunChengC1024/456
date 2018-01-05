window.onload=function(){
	var wrap = document.getElementsByClassName('wrap')[0];
	var imgs = wrap.getElementsByTagName('a');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var i = 0;
	function imgTab(){
		imgs[i%8].style.display = 'none';
		i++;
		imgs[i%8].style.display = 'block';
	}
	var timer = setInterval(imgTab,2000);
	wrap.onmouseover = function(){
		clearInterval(timer);  
	}
	wrap.onmouseout = function(){
		timer = setInterval(imgTab,2000);
	}
	prev.onclick = function(){
		imgs[i%8].style.display = 'none';
		i--;
		if (i < 0) {
			i = 7;
		};
		imgs[i%8].style.display = 'block';
	}
	next.onclick = function(){
		imgTab();
	}

}