//Super keywordy: On-page search engine optimization tool
//Web application developed by Graham O'Mahony
//Copyright 2017-2019
var title = document.getElementById("title");//Title counter
var titlecount = document.getElementById("titlecount");
var minlength = 0;
var regex = /\s+/gi;
var count = function(){
   if(title.value.length >= minlength){
        titlecount.innerHTML = "" + (minlength + title.value.length) + "<span class='maxchars'> / 70</span>";
	}
}
setInterval(count, 100);
var metricChange = function(){
var tcc = title.value.length;
	if(tcc <= 54){
		titlecount.classList.add("zeroval");
	} else if(tcc >= 55){
		titlecount.classList.remove("zeroval");
		titlecount.classList.add("superval");
	} else{
		titlecount.classList.add("zeroval");
	}
	if(tcc < 55){
		titlecount.classList.add("zeroval");
		titlecount.classList.remove("superval");
	}
	var mcc = metadesc.value.length;
	if(mcc <= 119){
		metacount.classList.add("zeroval");
	} else if(mcc >= 120){
		metacount.classList.remove("zeroval");
		metacount.classList.add("superval");
	} else{
		metacount.classList.add("zeroval");
	}
	if(mcc < 120){
		metacount.classList.add("zeroval");
		metacount.classList.remove("superval");
	}
}
setInterval(metricChange, 100);
var titlewordcount;
var twcount = function(){
	if(title.value.length >= minlength){
		titlewordcount = "" + (minlength + title.value.trim().replace(regex, ' ').split(/[^\s]+/).length - 1);
	}
}
setInterval(twcount, 100);
function urlOptimize(){
	var uriString = document.getElementById("uri").value;//URI preview format
	var z = uriString.toLowerCase();
	var convert = new RegExp("^[0-9a-zA-Z \b]+$");
	z = uriString.replace(/\s+/g, '-').toLowerCase();
	document.getElementById("snippeturi").innerHTML = "https://www.domain.com/" + z + ".html" + '<div class="r_cache">&#129171;</div>';
	document.getElementById("mobileuri").innerHTML = "https://www.domain.com > " + z + '<div class="r_cache">&#129171;</div>';
}
var uri = document.getElementById("uri"), uricount = document.getElementById("uricount");
//minlength declared
var count = function(){
   if(uri.value.length >= minlength){
        uricount.innerHTML = "" + (minlength + uri.value.length) + "<span class='maxchars'> / 70</span>";
	}
}
setInterval(count, 100);
var uriwordcount;
var uriwcount = function(){
	if(uri.value.length >= minlength){
		uriwordcount = "" + (minlength + uri.value.trim().replace(regex, ' ').split(/[^\s]+/).length - 1);
	}
}
setInterval(uriwcount, 100);
var metadesc = document.getElementById("metadesc"), metacount = document.getElementById("metacount");
//minlength declared
var count = function(){
   if(metadesc.value.length >= minlength){
        metacount.innerHTML = "" + (minlength + metadesc.value.length) + "<span class='maxchars'> / 190</span>";
	}
}
setInterval(count, 100);
var metaWordcount;
var metaWord = function(){
	if(metadesc.value.length >= minlength){
		metaWordcount = "" + (minlength + metadesc.value.trim().replace(regex, ' ').split(/[^\s]+/).length -1);
	}
}
setInterval(metaWord, 100);
var heading = document.getElementById("heading1"), headcount = document.getElementById("headingcount");
var wordcount = function(){
	if(heading.value.length >= minlength){
  		headcount.innerHTML = "" + (minlength + heading.value.trim().replace(regex, ' ').split(/[^\s]+/).length - 1);
  }
}
setInterval(wordcount, 100);
var textbody = document.getElementById("textbody"), contentcount = document.getElementById("contentcount");
var bodycount = function(){
  if(textbody.value.length >= minlength){
  		contentcount.innerHTML = "" + (minlength + textbody.value.trim().replace(regex, ' ').split(/[^\s]+/).length - 1);
  }
}
setInterval(bodycount, 100);
function previewSnippet(){//Snippet preview
	var getTitle = document.getElementById("title").value;
	var postTitle = document.getElementById("snippettitle").innerHTML = getTitle;
	var getDesc = document.getElementById("metadesc").value;
	var postDesc = document.getElementById("snippetdesc").innerHTML = getDesc;
	var postmTitle = document.getElementById("mobiletitle").innerHTML = getTitle;
	var postmDesc = document.getElementById("mobiledesc").innerHTML = getDesc;
}
var snippet = document.getElementById("snippet");
var mobilesnippet = document.getElementById("mobile_snippet");
var switcher = document.getElementById("switch");
switcher.onchange = function(){//Mobile preview toggle switch
	if(switcher.checked == true){
		snippet.style.display = "none";
		mobilesnippet.style.display = "block";
	} else{
		snippet.style.display = "block";
		mobilesnippet.style.display = "none";
	}
}
var drop = document.getElementsByClassName("drop");//Guidelines toggle
var plus = document.querySelector(".plus");
var q;
for(q = 0; q < drop.length; q++){
	drop[q].onclick = function(){
		this.classList.toggle("active");
		plus.classList.toggle("turn");
		var guide = this.nextElementSibling;
		if(guide.style.display === "block"){
			guide.style.display = "none";
		} else{
			guide.style.display = "block";
		}
	}
}
var keyresx = document.getElementsByClassName("keyresx")[0];//Hide keyword research notice
var winbar = document.getElementsByClassName("winbar")[0];
keyresx.onclick = function(){
	winbar.style.display = "none";
}
//Check on-page SEO of content
var checkseo = document.getElementById("checkseo");
checkseo.onclick = function(){
	var progbar = document.getElementById("progbar");
		progbar.style.display = "block";
		setTimeout(function(){
			progbar.style.display = "none";
		}, 500);
	var prime = document.getElementById("keyword1").value.toLowerCase();
		if(prime == ""){
			alert("First enter a primary keyword.");
			return true;
		}
	var nonprime = document.getElementById("keyword2").value.toLowerCase();
		if(nonprime == ""){
			alert("Enter a secondary keyword.");
			return true;
		}
	var warning = document.getElementById("warning"), modal = document.getElementsByClassName("modal"), close = document.getElementsByClassName("close")[0], titleKey = document.getElementById("title").value.toLowerCase();
	if(titleKey == ""){
		warning.style.display = "block";
		progbar.style.display = "none";
		close.onclick = function(){
			warning.style.display = "none";
			}
		window.onclick = function(event){
			if(event.target == warning){
				warning.style.display = "none";
			}
		}
		return false;
	}
	var downloadContent = document.getElementById("download-content").style.display = "block";
	var uriKey = document.getElementById("uri").value.toLowerCase();
	var descKey = document.getElementById("metadesc").value.toLowerCase();
	var headKey = document.getElementById("heading1").value.toLowerCase();
	var bodyKey = document.getElementById("textbody").value.toLowerCase();
	var keyArray = [titleKey, uriKey, descKey, headKey, bodyKey];
	var resArray = [result1, result2, result3, result4, result5];//Primary keyword results
	var nopArray = [result6, result7, result8, result9, result10];//Secondary keyword results
	var trueCount = [headKey, bodyKey];//Main heading and body text
	var k = keyArray[0].includes(prime);
	resArray[0].innerHTML = k;
	var e = keyArray[1].includes(prime);
	resArray[1].innerHTML = e;
	var y = keyArray[2].includes(prime);
	resArray[2].innerHTML = y;
	var w = keyArray[3].includes(prime);
	resArray[3].innerHTML = w;
	var o = keyArray[4].includes(prime);
	resArray[4].innerHTML = o;
	var r = keyArray[0].includes(nonprime);
	nopArray[0].innerHTML = r;
	var d = keyArray[1].includes(nonprime);
	nopArray[1].innerHTML = d;
	var s = keyArray[2].includes(nonprime);
	nopArray[2].innerHTML = s;
	var ta = keyArray[3].includes(nonprime);
	nopArray[3].innerHTML = ta;
	var rg = keyArray[4].includes(nonprime);
	nopArray[4].innerHTML = rg;
//Replace Boolean value with icon
	var fi = resArray[0].innerHTML;
	var conv0 = fi.replace("true", 'Title <span class="tick" title="Present"></span>');
	var conv0a = fi.replace("false", 'Title <span class="cross extra" title="Not present"></span>');
	if(fi == "true"){
			resArray[0].innerHTML = conv0;
		} else{
			resArray[0].innerHTML = conv0a;
		}
	var fo = nopArray[0].innerHTML;
	var rep0 = fo.replace("true", 'Title <span class="tick" title="Present"></span>');
	var rep0a = fo.replace("false", 'Title <span class="cross extra" title="Not present"></span>');
	if(fo == "true"){
			nopArray[0].innerHTML = rep0;
		} else{
			nopArray[0].innerHTML = rep0a;
		}
	var fii = resArray[1].innerHTML;
	var conv1 = fii.replace("true", 'URI <span class="tick" title="Present"></span>');
	var conv1a = fii.replace("false", 'URI <span class="cross extra" title="Not present"></span>');
	if(fii == "true"){
			resArray[1].innerHTML = conv1;
		} else{
			resArray[1].innerHTML = conv1a;
		}
	var foo = nopArray[1].innerHTML;
	var rep1 = foo.replace("true", 'URI <span class="tick" title="Present"></span>');
	var rep1a = foo.replace("false", 'URI <span class="cross extra" title="Not present"></span>');
	if(foo == "true"){
			nopArray[1].innerHTML = rep1;
		} else{
			nopArray[1].innerHTML = rep1a;
		}
	var fiii = resArray[2].innerHTML;
	var conv2 = fiii.replace("true", 'Meta description <span class="tick" title="Present"></span>');
	var conv2a = fiii.replace("false", 'Meta description <span class="cross extra" title="Not present"></span>');
	if(fiii == "true"){
			resArray[2].innerHTML = conv2;
		} else{
			resArray[2].innerHTML = conv2a;
		}
	var foop = nopArray[2].innerHTML;
	var rep2 = foop.replace("true", 'Meta description <span class="tick" title="Present"></span>');
	var rep2a = foop.replace("false", 'Meta description <span class="cross extra" title="Not present"></span>');
	if(foop == "true"){
			nopArray[2].innerHTML = rep2;
		} else{
			nopArray[2].innerHTML = rep2a;
		}
	var fiv = resArray[3].innerHTML;
	var conv3 = fiv.replace("true", 'Main heading <span class="tick" title="Present"></span>');
	var conv3a = fiv.replace("false", 'Main heading <span class="cross extra" title="Not present"></span>');
	if(fiv == "true"){
			resArray[3].innerHTML = conv3;
		} else{
			resArray[3].innerHTML = conv3a;
		}
	var foopo = nopArray[3].innerHTML;
	var rep3 = foopo.replace("true", 'Main heading <span class="tick" title="Present"></span>');
	var rep3a = foopo.replace("false", 'Main heading <span class="cross extra" title="Not present"></span>');
	if(foopo == "true"){
			nopArray[3].innerHTML = rep3;
		} else{
			nopArray[3].innerHTML = rep3a;
		}
	var fv = resArray[4].innerHTML;
	var conv4 = fv.replace("true", 'Body text <span class="tick" title="Present"></span>');
	var conv4a = fv.replace("false", 'Body text <span class="cross extra" title="Not present"></span>');
	if(fv == "true"){
			resArray[4].innerHTML = conv4;
		} else{
			resArray[4].innerHTML = conv4a;
		}
	var foopoo = nopArray[4].innerHTML;
	var rep4 = foopoo.replace("true", 'Body text <span class="tick" title="Present"></span>');
	var rep4a = foopoo.replace("false", 'Body text <span class="cross extra" title="Not present"></span>');
	if(foopoo == "true"){
			nopArray[4].innerHTML = rep4;
		} else{
			nopArray[4].innerHTML = rep4a;
		}
//Total word count
	var twc = titlewordcount;
	var uwc = uriwordcount;
	var mdc = metaWordcount;
	var hc = headcount.innerHTML;
	var cc = contentcount.innerHTML;
	var etotal = +twc + +uwc + +mdc + +hc + +cc;
	var bodytextcount = +hc + +cc;
	document.getElementById("totalcount").innerHTML = etotal;
	document.getElementById("bodywordcount").innerHTML = '<small class="fact">Content length: ' + bodytextcount + '</small>';
//Search body text for first occurrence of primary keyword
	var primeIndex = bodyKey.indexOf(prime.toString());
	var superkey = primeIndex.toString();
	if(superkey >= 0 && superkey <= 200){
		document.getElementById("pkfirst").innerHTML = '<small class="fact tick">Primary keyword in first segment.</small>';
	} else{
		document.getElementById("pkfirst").innerHTML = '<small class="fact cross">Primary keyword not in first segment.</small>';
	}
	var nonprimeIndex = bodyKey.indexOf(nonprime.toString());
	var nonsuperkey = nonprimeIndex.toString();
	if(nonsuperkey >= 0 && nonsuperkey <= 200){
		document.getElementById("skfirst").innerHTML = '<small class="fact tick">Secondary keyword in first segment.</small>';
	} else{
		document.getElementById("skfirst").innerHTML = '<small class="fact cross">Secondary keyword not in first segment.</small>';
	}
//Keyword statistics
	var tk = document.getElementById("tkcount");//Primary keyword count
	var stk = document.getElementById("tkcount2");//Secondary keyword count
	var utk = document.getElementById("tkcount3");//Target keyword count
	var tkd = document.getElementById("tkdensity");//Primary keyword density
	var tkd2 = document.getElementById("tkdensity2");//Secondary keyword density
	var tkd3 = document.getElementById("tkdensity3");//Target keyword density
	var exp = new RegExp(prime, 'g');
	var ee = keyArray.toString();
	var xy = ee.match(exp);
	if(xy == null){
		alert("There is absolutely no match with the primary keyword!");
		tk.innerHTML = "0";
		tkd.innerHTML = "0%";
//		alert("There is absolutely no exact match with the target keyword!");
		utk.innerHTML = "0";
		tkd3.innerHTML = "0%";
		secondaryRun();
	} else{
		tk.innerHTML = xy.length;
		primeDensity();
		secondaryRun();
	}
//Primary keyword density rate
function primeDensity(){
		var kwc = xy.length;
		var wdc = etotal;
		var zed = kwc / wdc;
		var rate = zed * 100;
		rate = rate.toFixed(1);
		tkd.innerHTML = rate + '%';
	}
//Secondary keyword count
function secondaryRun(){
	var set = new RegExp(nonprime, 'g');
	var eee = keyArray.toString();
	var xyz = eee.match(set);
	if(xyz == null){
		alert("There is absolutely no match with the secondary keyword!");
		stk.innerHTML = "0";
		tkd2.innerHTML = "0%";
//		alert("There is absolutely no exact match with the target keyword!");
		utk.innerHTML = "0";
		tkd3.innerHTML = "0%";
	} else{
		stk.innerHTML = xyz.length;
	}
//Secondary keyword density rate
	if(xyz == null){
		xyz = "0";
	} else{
	var skwc = xyz.length;
	var swdc = etotal;
	var zeds = skwc / swdc;
	var secrate = zeds * 100;
	secrate = secrate.toFixed(1);
	tkd2.innerHTML = secrate + '%';
	}
//Target keyword count
	var targetKey = prime + " " + nonprime;
	var tog = targetKey.toString();
	var bothExp = new RegExp(tog, 'g');
	var el = keyArray.toString();
	var tar = el.match(bothExp);
	if(tar == null){
//		alert("There is absolutely no exact match with the target keyword!");
		utk.innerHTML = "0";
		tkd3.innerHTML = "0%";
	} else if(xy == "0" || xyz == "0"){
		utk.innerHTML = "0";
	} else {
		utk.innerHTML = tar.length;
	}
//Target keyword density rate
	if(tar == null){
		tar = "0";
	} else{
	var tkwc = tar.length;
	var trwdc = etotal;
	var zee = tkwc / trwdc;
	var trgrate = zee * 100;
	trgrate = trgrate.toFixed(1);
	tkd3.innerHTML = trgrate + '%';
	}
}//End of secondaryRun function
	var note1 = document.getElementById("note-prime");
	note1.innerHTML = "<span class='semi'>: </span>" + prime;
	var note2 = document.getElementById("note-nonprime");
	note2.innerHTML = "<span class='semi'>: </span>" + nonprime;
	var note3 = document.getElementById("exact-match");
	note3.innerHTML = "<span class='semi'>: </span>" + prime + " " + nonprime;
//Topwords function
	var totalKey = [headKey, ' ' , bodyKey];
	var specialKey = totalKey.toString();
	var stopwords = ["to", "is", "for", "you", "the", "your", "youre", "an", "on", "by", "this", "will", "of", "a", "i", "im", "ive", "its", "from", "most", "more", "be", "there", "theres", "are", "many", "what", "when", "who", "where", "why", "in", "–", "was", "as", "isnt", "and", "with", "it", "he", "she", "that", "than", "know", "knew", "within", "can", "if", "per", "but", "which", "or", "etc", "am", "so", "no", "oh", "we", "my", "me", "at", "his", "him", "her", "how"];
	var removeSpecialChars = specialKey.replace(/^\s+|\s+$/gm, "");
	// var removeSpecialChars = specialKey.replace(/\r?\n|\r/gm, "");
	var newSpecialChars = removeSpecialChars.trim().replace(/['\.,-\/""#?!$%\^&\*;:{}=\-_`~()]/g, "");
	var filterSpecial = newSpecialChars.split(" ").filter(word => stopwords.indexOf(word) === -1);
	var superCount = {};
	filterSpecial.forEach(word => {
	  superCount[word] = (superCount[word] || 0) + 1;
	});
	var sortArray = Object.keys(superCount).map(word => ({
		word: word,
		frequency: superCount[word]
		})).sort((a, b) => b.frequency - a.frequency);
	var cutOff = sortArray.slice(0, 20);
	cutOff.forEach(item => {
	document.getElementById("freqCount").innerHTML = cutOff[0].frequency;
	document.getElementById("topwords").innerHTML = cutOff[0].word;
	var twD = document.getElementById("topwordDensity");
	var freqDense = cutOff[0].frequency / bodytextcount * 100;
	twD.innerHTML = freqDense.toFixed(2) + "%";
	document.getElementById("freqCount1").innerHTML = cutOff[1].frequency;
	document.getElementById("topwords1").innerHTML = cutOff[1].word;
	var twD1 = document.getElementById("topwordDensity1");
	var freqDense1 = cutOff[1].frequency / bodytextcount * 100;
	twD1.innerHTML = freqDense1.toFixed(2) + "%";
	document.getElementById("freqCount2").innerHTML = cutOff[2].frequency;
	document.getElementById("topwords2").innerHTML = cutOff[2].word;
	var twD2 = document.getElementById("topwordDensity2");
	var freqDense2 = cutOff[2].frequency / bodytextcount * 100;
	twD2.innerHTML = freqDense2.toFixed(2) + "%";
	document.getElementById("freqCount3").innerHTML = cutOff[3].frequency;
	document.getElementById("topwords3").innerHTML = cutOff[3].word;
	var twD3 = document.getElementById("topwordDensity3");
	var freqDense3 = cutOff[3].frequency / bodytextcount * 100;
	twD3.innerHTML = freqDense3.toFixed(2) + "%";
	document.getElementById("freqCount4").innerHTML = cutOff[4].frequency;
	document.getElementById("topwords4").innerHTML = cutOff[4].word;
	var twD4 = document.getElementById("topwordDensity4");
	var freqDense4 = cutOff[4].frequency / bodytextcount * 100;
	twD4.innerHTML = freqDense4.toFixed(2) + "%";
	document.getElementById("freqCount5").innerHTML = cutOff[5].frequency;
	document.getElementById("topwords5").innerHTML = cutOff[5].word;
	var twD5 = document.getElementById("topwordDensity5");
	var freqDense5 = cutOff[5].frequency / bodytextcount * 100;
	twD5.innerHTML = freqDense5.toFixed(2) + "%";
	document.getElementById("freqCount6").innerHTML = cutOff[6].frequency;
	document.getElementById("topwords6").innerHTML = cutOff[6].word;
	var twD6 = document.getElementById("topwordDensity6");
	var freqDense6 = cutOff[6].frequency / bodytextcount * 100;
	twD6.innerHTML = freqDense6.toFixed(2) + "%";
	document.getElementById("freqCount7").innerHTML = cutOff[7].frequency;
	document.getElementById("topwords7").innerHTML = cutOff[7].word;
	var twD7 = document.getElementById("topwordDensity7");
	var freqDense7 = cutOff[7].frequency / bodytextcount * 100;
	twD7.innerHTML = freqDense7.toFixed(2) + "%";
	document.getElementById("freqCount8").innerHTML = cutOff[8].frequency;
	document.getElementById("topwords8").innerHTML = cutOff[8].word;
	var twD8 = document.getElementById("topwordDensity8");
	var freqDense8 = cutOff[8].frequency / bodytextcount * 100;
	twD8.innerHTML = freqDense8.toFixed(2) + "%";
	document.getElementById("freqCount9").innerHTML = cutOff[9].frequency;
	document.getElementById("topwords9").innerHTML = cutOff[9].word;
	var twD9 = document.getElementById("topwordDensity9");
	var freqDense9 = cutOff[9].frequency / bodytextcount * 100;
	twD9.innerHTML = freqDense9.toFixed(2) + "%";
	document.getElementById("freqCount10").innerHTML = cutOff[10].frequency;
	document.getElementById("topwords10").innerHTML = cutOff[10].word;
	var twD10 = document.getElementById("topwordDensity10");
	var freqDense10 = cutOff[10].frequency / bodytextcount * 100;
	twD10.innerHTML = freqDense10.toFixed(2) + "%";
	document.getElementById("freqCount11").innerHTML = cutOff[11].frequency;
	document.getElementById("topwords11").innerHTML = cutOff[11].word;
	var twD11 = document.getElementById("topwordDensity11");
	var freqDense11 = cutOff[11].frequency / bodytextcount * 100;
	twD11.innerHTML = freqDense11.toFixed(2) + "%";
	document.getElementById("freqCount12").innerHTML = cutOff[12].frequency;
	document.getElementById("topwords12").innerHTML = cutOff[12].word;
	var twD12 = document.getElementById("topwordDensity12");
	var freqDense12 = cutOff[12].frequency / bodytextcount * 100;
	twD12.innerHTML = freqDense12.toFixed(2) + "%";
	document.getElementById("freqCount13").innerHTML = cutOff[13].frequency;
	document.getElementById("topwords13").innerHTML = cutOff[13].word;
	var twD13 = document.getElementById("topwordDensity13");
	var freqDense13 = cutOff[13].frequency / bodytextcount * 100;
	twD13.innerHTML = freqDense13.toFixed(2) + "%";
	document.getElementById("freqCount14").innerHTML = cutOff[14].frequency;
	document.getElementById("topwords14").innerHTML = cutOff[14].word;
	var twD14 = document.getElementById("topwordDensity14");
	var freqDense14 = cutOff[14].frequency / bodytextcount * 100;
	twD14.innerHTML = freqDense14.toFixed(2) + "%";
	document.getElementById("freqCount15").innerHTML = cutOff[15].frequency;
	document.getElementById("topwords15").innerHTML = cutOff[15].word;
	var twD15 = document.getElementById("topwordDensity15");
	var freqDense15 = cutOff[15].frequency / bodytextcount * 100;
	twD15.innerHTML = freqDense15.toFixed(2) + "%";
	document.getElementById("freqCount16").innerHTML = cutOff[16].frequency;
	document.getElementById("topwords16").innerHTML = cutOff[16].word;
	var twD16 = document.getElementById("topwordDensity16");
	var freqDense16 = cutOff[16].frequency / bodytextcount * 100;
	twD16.innerHTML = freqDense16.toFixed(2) + "%";
	document.getElementById("freqCount17").innerHTML = cutOff[17].frequency;
	document.getElementById("topwords17").innerHTML = cutOff[17].word;
	var twD17 = document.getElementById("topwordDensity17");
	var freqDense17 = cutOff[17].frequency / bodytextcount * 100;
	twD17.innerHTML = freqDense17.toFixed(2) + "%";
	document.getElementById("freqCount18").innerHTML = cutOff[18].frequency;
	document.getElementById("topwords18").innerHTML = cutOff[18].word;
	var twD18 = document.getElementById("topwordDensity18");
	var freqDense18 = cutOff[18].frequency / bodytextcount * 100;
	twD18.innerHTML = freqDense18.toFixed(2) + "%";
	document.getElementById("freqCount19").innerHTML = cutOff[19].frequency;
	document.getElementById("topwords19").innerHTML = cutOff[19].word;
	var twD19 = document.getElementById("topwordDensity19");
	var freqDense19 = cutOff[19].frequency / bodytextcount * 100;
	twD19.innerHTML = freqDense19.toFixed(2) + "%";
	});
// function download_on_page_csv(){
// 	var onpage = "Title, URI, Meta description, Main heading, Body text\n";
// 	keyArray.forEach(function(row){
// 		onpage += row.join(", ");
// 		onpage += "\n";
// 	});
// 	console.log(onpage);
// 	downloadContent.href = "data:text/csv;charset-utf=8," + encodeURI(onpage);
// 	downloadContent.target = "_blank";
// 	downloadContent.download = "on-page-seo_superkeywordy.csv";
// 	downloadContent.click();
// }
}
