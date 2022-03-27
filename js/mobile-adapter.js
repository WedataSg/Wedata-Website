window.onload = function(){
	let isMobile = window.innerHeight > window.innerWidth;
	if(isMobile){
		var els = document.getElementsByClassName("delete-if-mobile");

		Array.prototype.forEach.call(els, function(el) {
			el.remove();
		});
		
		els = document.getElementsByClassName("view-if-mobile");

		Array.prototype.forEach.call(els, function(el) {
			el.style.visibility = "visible";
		});
		
		//Raise h1s by 33%
		els = document.getElementsByTagName("h1");
		Array.prototype.forEach.call(els, function(el) {
			originalSize = window.getComputedStyle(el, null).getPropertyValue('font-size').replace("px","");
			el.style.fontSize = (parseInt(originalSize)*1.3).toString() + "px";
		});
		
		//Raise h2s by 33%
		els = document.getElementsByTagName("h2");
		Array.prototype.forEach.call(els, function(el) {
			originalSize = window.getComputedStyle(el, null).getPropertyValue('font-size').replace("px","");
			el.style.fontSize = (parseInt(originalSize)*2).toString() + "px";
		});
		
		//Raise h3 by 150%
		els = document.getElementsByTagName("h3");
		Array.prototype.forEach.call(els, function(el) {
			originalSize = window.getComputedStyle(el, null).getPropertyValue('font-size').replace("px","");
			el.style.fontSize = (parseInt(originalSize)*2.5).toString() + "px";
		});
		//Raise p by 150%
		els = document.getElementsByTagName("p");
		Array.prototype.forEach.call(els, function(el) {
			originalSize = window.getComputedStyle(el, null).getPropertyValue('font-size').replace("px","");
			el.style.fontSize = (parseInt(originalSize)*2.5).toString() + "px";
		});
		
		el = document.getElementById("chatbot-img"); 
		originalSize = window.getComputedStyle(el, null).getPropertyValue('width').replace("vw","");
		el.style.width = (parseInt(originalSize)*0.7).toString() + "vw";
		
		el = document.getElementById("chatbot-container"); 
		el.style.width = "100vw";
		el.style.height = "90vh";
		
		el = document.getElementById("chatbot-minimizeButton"); 
		originalSize = window.getComputedStyle(el, null).getPropertyValue('width').replace("vw","");
		el.style.width = (parseInt(originalSize)*0.8).toString() + "vw";
	}
}
