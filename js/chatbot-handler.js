//Recolor the chatbot header
headers = document.getElementById("d8iframe").document.getElementsByTagName("header")
Array.prototype.forEach.call(headers, function(el) {
	el.style.backgroundColor = "#787E7D";
});


function openChatbot(){
	document.getElementById("chatbot-div").style.visibility = "visible";
	document.getElementById("chatbot-img").style.visibility = "hidden";
}

function hideChatbot(){
	document.getElementById("chatbot-div").style.visibility = "hidden";
	document.getElementById("chatbot-img").style.visibility = "visible";
}