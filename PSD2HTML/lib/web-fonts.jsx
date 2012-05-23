var WEBFONTS = ['Arial', 'Arial Narrow', 'Verdana', 'Georgia', 'Times New Roman', 
'Trebuchet MS', 'Courier New', 'Impact', 'Comic Sans MS', 'Tahoma', 'Courier', 'Lucida Sans Unicode',
'Lucida Console', 'Garamond', ' MS Sans Serif', 'MS Serif', 'Palatino Linotype', 'Symbol', '宋体', '微软雅黑', '黑体', '楷体',
'幼圆', '仿宋', 'MicrosoftYaHei', 'SimSun', 'AdobeSongStd-Light', 'SimHei', 'FZLTZHK--GBK1-0'];

WEBFONTS.webFont = {microsoftyahei:'Microsoft YaHei', 'fzltzhk--gbk1-0':'Microsoft YaHei'};

WEBFONTS.getWebFont = function(font){
	return WEBFONTS.webFont[font.toLowerCase()] || font;
}

WEBFONTS.indexOf = function(s){
	for(var i = 0, l = WEBFONTS.length; i < l; i++){
		if(WEBFONTS[i] === s) return i;
	}
	return -1;
}