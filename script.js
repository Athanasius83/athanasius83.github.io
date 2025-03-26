
document.addEventListener("DOMContentLoaded", function(e) {

	//Add spacing between divs

	var absoluteDivHeight = document.getElementsByTagName('div')[0].offsetHeight;
	var blankDiv = document.getElementsByClassName('filler')[0];
	blankDiv.style.height = absoluteDivHeight + 5 + "px";

	const loadingURL = window.location.href;

	document.addEventListener("click", function(e){
		setTimeout(highlight, delay=35);
	});
	window.addEventListener("keydown",function(e){
		if (e.key=="Enter"){
			const newURL = window.location.href;
			if (!(loadingURL.toString() == newURL.toString())){
				setTimeout(highlight,delay=35);
			}
		}
	});
});

function highlight(){
	const url = window.location.href;
	if (url.lastIndexOf("#")!=-1){
		const id = url.substring(url.lastIndexOf("#")+1);
		console.log(id);
		const footnotes = document.getElementsByClassName("other")[0].children;
		for (var i = 0; i < footnotes.length; i++){
			if (footnotes[i].id == id){
				footnotes[i].style.backgroundColor = "#ADD8E6";
			} else{
				footnotes[i].style.backgroundColor = "transparent";
			}
		}
	}

}