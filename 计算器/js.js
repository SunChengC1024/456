var str="";
var num;
/*数据显示函数*/
function showData(num){
	str = str + document.getElementById(num).value;	
	//document.getElementById(num).value是百度得到的
	document.getElementById("result").innerHTML = str;
}
/*结果计算函数*/
function calculate(){
	document.getElementById("result").innerHTML = '';
	var resultNum = eval(str);
	document.getElementById("result").innerHTML = resultNum;
	str = resultNum;
}
/*内容清空函数*/
function clearData(){
	str = "";
	document.getElementById("result").innerHTML = 0;
}