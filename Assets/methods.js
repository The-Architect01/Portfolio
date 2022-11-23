$(document).ready(function() {$('body').bind('cut copy paste', function(event) {event.preventDefault();}); });
$(document).bind("contextmenu",function(e){ return false; });

function LoadTemplate(){
    var request = new XMLHttpRequest();
    request.open('GET', './template.html', false);
    request.onreadystatechange= function() {
      if (this.readyState !== 4 || this.status !== 200) return;
      document.getElementById('TemplateHeader').innerHTML += this.responseText;
    };
    request.send();

    document.getElementById("TemplateHeader").removeAttribute("id");
}

var submitted=false;
function OpenNav(){
    document.getElementById("CustomSideNav").style.width="250px";
    //try{document.getElementById("ContentFF").style.marginRight = "300px";}catch{}
}
function CloseNav(){
    document.getElementById("CustomSideNav").style.width="0px";
    //try{document.getElementById("ContentFF").style.marginRight="90px";}catch{}
}
function Submit(){
    document.getElementById("ErrorText").style.display = "none";
    if(Valid()){
        document.getElementById("inputForm").style.display = "none";
        document.getElementById("Thanks").style.display = "block";
    }else{
        document.getElementById("ErrorText").style.display = "block";
    }
};
function AnimateHover(sender, v){
    if(v){
        sender.style.background = "#5BBCD6";
    }else{
        sender.style.background = "#ABDDDE";
    }
}
function Valid(){
    if(!document.getElementById("entry.2005620554").value.match(/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/) ||
        document.getElementById("entry.2005620554").value == "") { document.getElementById("ErrorText").innerHTML = "You didn't enter a valid name!"; return false; }
    if(!document.getElementById("entry.1092508711").value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ||
        document.getElementById("entry.1092508711").value == "") { document.getElementById("ErrorText").innerHTML = "You didn't enter a valid email!"; return false; }
    if(document.getElementById("entry.1994019312").value == "") { document.getElementById("entry.1994019312").value = "They/Them"; }
    if(document.getElementById("entry.839337160").value == "") { document.getElementById("ErrorText").innerHTML = "You didn't enter a message!"; return false; }
    return true;
}
window.onscroll = function() {
    if(document.body.scrollTop != 0 || document.documentElement.scrollTop != 0){
        document.getElementById("MenuOpen").style.opacity = 0;
    }else{
        document.getElementById("MenuOpen").style.opacity = 1;
    }
}
