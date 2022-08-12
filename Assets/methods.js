function OpenNav(){
    document.getElementById("CustomSideNav").style.width="250px";
    try{document.getElementById("ContentFF").style.marginRight = "300px";}catch{}
}
function CloseNav(){
    document.getElementById("CustomSideNav").style.width="0px";
    try{document.getElementById("ContentFF").style.marginRight="75px";}catch{}
}
window.onscroll = function() {
    if(document.body.scrollTop != 0 || document.documentElement.scrollTop != 0){
        document.getElementById("MenuOpen").style.opacity = 0;
    }else{
        document.getElementById("MenuOpen").style.opacity = 1;
    }
}