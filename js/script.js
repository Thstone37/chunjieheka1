/* 
* @Author: anchen
* @Date:   2016-02-18 05:52:50
* @Last Modified by:   anchen
* @Last Modified time: 2016-02-18 06:09:40
*/

var music=document.getElementById("music");
var audio=document.getElementsByTagName("audio")[0];
music.onclick=function(){
    if(audio.paused)
    {
        audio.play();
        //this.setAttribute("class","play");
        this.style.animationPlayState="running";
    }else{
    audio.pause();
    //this.setAttribute("class","");
    this.style.animationPlayState="paused";
}
}