

window.onload=function()
{
	var oCh = document.getElementById('ch');
	var oChip = document.getElementById('chip');
	var oIp = oChip.getElementsByTagName('input');
	var oChdiv = document.getElementById('chdiv');
	var aChdiv = oChdiv.getElementsByTagName('div');

	for(var i=0;i<oIp.length;i++)
	{
		oIp[i].index = i;
		oIp[i].onclick=function()
		{
			for(var i=0;i<oIp.length;i++)
			{
				oIp[i].className="init-btn-class";
				aChdiv[i].style.display="none";
			}
			this.className="btns-active";
			aChdiv[this.index].style.display="block"
		}
	}
}