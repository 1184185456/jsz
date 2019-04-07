// JavaScript Document

window.onload=function(){
		var oP=document.getElementById('infop');
var oSpan=oP.getElementsByTagName('span')[0];
var oA=oP.getElementsByTagName('a')[0];
var str=oSpan.innerHTML;
oSpan.innerHTML=str.substring(0,150);
var onOff=false;
oA.onclick=function()
{
	if(onOff)
	{
	oSpan.innerHTML=str.substring(0,150);
	oA.innerHTML='>>展开';
}
else
{
	oSpan.innerHTML=str;
	oA.innerHTML='>>收缩';
	}
onOff=!onOff;
	}
	var oTab=document.getElementById('tab');
	var oInput=oTab.getElementsByTagName('input');
	var oDiv=oTab.getElementsByTagName('div');
	for(var i=0;i<oInput.length;i++)
	{
		oInput[i].index=i;
		oInput[i].onclick=function()
		{
			for(var j=0;j<oInput.length;j++)
			{
			oInput[j].className="none";
			oDiv[j].style.display="none";	
			}
			this.className="acive";
			oDiv[this.index].style.display="block";
			}
		}
	}

	