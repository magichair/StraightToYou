// Sample youtube embed - some have extra params '?r=0'
//<iframe width="854" height="480" src="https://www.youtube.com/embed/TxX_Mhld26g?r=0" frameborder="0" allowfullscreen></iframe>

// TODO: maybe register a DOM change listener to re-run the search

/** Start Youtube detection code **/
$("iframe").map(function() {
	var srcUrl = this.src;
	// Youtube embed
	if (srcUrl.toLowerCase().indexOf("youtube.com/embed") >= 0) {
		//console.log(srcUrl);
		var youtubeLink = srcUrl.replace("?","&").replace("embed/", "watch?v=");
		//console.log(youtubeLink);
		window.location.href = youtubeLink;
	}
});
//** End Youtube detection code **/

// TODO: implement other vidoe service checks