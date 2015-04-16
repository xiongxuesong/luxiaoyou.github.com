var articles_list = new Array();
articles_list[0]  = "agate"
articles_list[1]  = "androidstudio"
articles_list[3]  = "arta"
articles_list[4]  = "ascetic"
articles_list[5]  = "atelier-dune.dark"
articles_list[6]  = "atelier-dune.light"
articles_list[7]  = "atelier-forest.dark"
articles_list[8]  = "atelier-forest.light"
articles_list[9]  = "atelier-heath.dark"
articles_list[10]  = "atelier-heath.light"
articles_list[11]  = "atelier-lakeside.dark"
articles_list[12]  = "atelier-lakeside.light"
articles_list[13]  = "atelier-seaside.dark"
articles_list[14]  = "atelier-seaside.light"
articles_list[15]  = "atelier-sulphurpool.dark"
articles_list[16]  = "atelier-sulphurpool.light"
articles_list[17]  = "brown_paper"
articles_list[18]  = "codepen-embed"
articles_list[19]  = "color-brewer"
articles_list[20]  = "dark"
articles_list[21]  = "darkula"
articles_list[22]  = "default"
articles_list[23]  = "docco"
articles_list[24]  = "far"
articles_list[25]  = "foundation"
articles_list[26]  = "github"
articles_list[27]  = "googlecode"
articles_list[28]  = "hybrid"
articles_list[29]  = "idea"
articles_list[30]  = "ir_black"
articles_list[31]  = "kimbie.dark"
articles_list[32]  = "kimbie.light"
articles_list[33]  = "magula"
articles_list[34]  = "mono-blue"
articles_list[35]  = "monokai"
articles_list[36]  = "monokai_sublime"
articles_list[37]  = "obsidian"
articles_list[38]  = "paraiso.dark"
articles_list[39]  = "paraiso.light"
articles_list[40]  = "pojoaque"
articles_list[41]  = "railscasts"
articles_list[42]  = "rainbow"
articles_list[43]  = "school_book"
articles_list[44]  = "solarized_dark"
articles_list[45]  = "solarized_light"
articles_list[46]  = "sunburst"
articles_list[47]  = "tomorrow-night-blue"
articles_list[48]  = "tomorrow-night-bright"
articles_list[49]  = "tomorrow-night-eighties"
articles_list[50]  = "tomorrow-night"
articles_list[51]  = "tomorrow"
articles_list[52]  = "vs"
articles_list[53]  = "xcode"
articles_list[54]  = "zenburn"

//更换风格
cc=0
i = 0
function changeHref()
{
	if (cc==0) 
	{
		cc=1
		document.getElementById("myhref").href="../../../highlight/styles/" + articles_list[i] + ".css"
		document.getElementById("butt").value="更换风格:"+articles_list[i]+ "-" + i	
		i = i + 1
		if (i ==55)
		i=0
	}
	else
	{
		cc=0
		document.getElementById("myhref").href="../../../highlight/styles/" + articles_list[i] + ".css"
		document.getElementById("butt").value="更换风格:"+articles_list[i] + "-" + i
		i = i + 1
		if (i ==55)
		i=0
	}
}