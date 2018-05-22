// JavaScript Document
window.onload = init;
//import "freestylo.css";

var path = window.location.pathname;
var page = path.split("/").pop();
var logod;
var conHeader;
var conText;
var logodheadtext;
var valueTimeout;

var links = new Array("https://www.youtube.com/watch?v=2cjbSgy3vSw","https://github.com/RaudseppSiim","https://github.com/RaudseppSiim","https://github.com/RaudseppSiim");
var contentText = new Array("Ma olen 18 aastane Tallinna Polütehnikumi õpilane, kes on rõõmsameelne ja õpihimuline. Mulle meeldib arendada oma mõtlemist erinevate mõistatuste ja ülesannetega. ",
"Ma pean suurt lugu muusikast ja arvutimängudest. Need 2 asja on terve mu elu olnud suured sõbrad.",
"Ma olen osav mitmetes asjades. Ma olen kiire taibu ja laia silmaringiga. Ma tean kõiki Minecrafti retsepte peast.");
var contentHead = new Array("Mina","Hobid","Oskused");
var logo_head = new Array("Game", "Windows Forms", "Android", "Web");
var logoimg = new Array("images/image0.jpg","images/image1.png","images/image2.png","images/image3.png");
var thisCont = -1;
function init()
{

	logod = document.getElementById("logo");
	conHeader = document.getElementById("content_header");
	conText = document.getElementById("content_para");
	logodheadtext = document.getElementById("content_Workshead");
	thisCont++;
	if(page == "Avaleht.html")
	{
		if(thisCont==contentText.length)
		{
			thisCont=0;
		}
	}
	if(page == "works.html")
	{
		if(thisCont==logo_head.length)
		{
			thisCont=0;
		}
	}
	if(page == "contact.html")
	{
		document.getElementById("Resume").onclick = resumeClick;
	}
	changeTexT();
	console.log(thisCont);
	valueTimeout=setTimeout("init()",10*1000);
}

function prev(){
if(page == "Avaleht.html")
{
	if(thisCont <= 0)
	{
		thisCont = contentText.length;
	}
}
if(page == "works.html")
{
	if(thisCont <= 0)
	{
		thisCont = logo_head.length;
	}
}
console.log(thisCont);
 thisCont--;
 changeTexT();
 clearTimeout(valueTimeout);
}

function next(){
thisCont++;
if(page == "Avaleht.html")
{
	if(thisCont >= contentText.length)
	{
		thisCont = 0;
	}
}
	if(page == "works.html")
	{
		if(thisCont >= logo_head.length)
		{
			thisCont = 0;
		}
	}
	console.log(thisCont);
 changeTexT();
 clearTimeout(valueTimeout);
}

function changeTexT(){
	if(page == "Avaleht.html")
	{

		conHeader.classList.add("animatedfadein");
		conText.classList.add("animatedfadein");
		document.getElementById("content_header").innerHTML = contentHead[thisCont];
		document.getElementById("content_para").innerHTML = contentText[thisCont];
		setTimeout("removeClassesAvaleht()",1000);

	}

	if(page == "works.html")
	{

		logod.classList.add("animatedfadein");
		logodheadtext.classList.add("animatedfadein");
		document.getElementById("content_Workshead").innerHTML = logo_head[thisCont];
		document.getElementById("logo").src = logoimg[thisCont];
		document.getElementById("projectLink").href = links[thisCont];
		setTimeout("removeClassesWork()",1000);

	}
}
function removeClassesAvaleht(){
	conHeader.classList.remove("animatedfadein");
	conText.classList.remove("animatedfadein");
	}
function removeClassesWork(){
	logod.classList.remove("animatedfadein");
	logodheadtext.classList.remove("animatedfadein");
}
function resumeClick(){
window.open('CV.pdf');
}
