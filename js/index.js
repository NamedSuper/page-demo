
var lists = document.getElementsByTagName("li");

for (var i = 0; i < lists.length; i++) {
	lists[i].addEventListener("touchstart",function(){
		for(var j=0;j<lists.length;j++) {
			lists[j].removeAttribute('class','');
		}
		this.setAttribute("class","active");
	})
}

//如果用