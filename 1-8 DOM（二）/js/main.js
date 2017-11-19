window.onload = function(){
	var aNodes = document.getElementsByTagName("div");
	for (var i=0; i<aNodes.length; i++)
	{
		imgNodes[i].onmouseover = function(){
			this.className = "subMenuShow";
		}
		imgNodes[i].onmouseout = function(){
			this.className = "";
		}
	}
}