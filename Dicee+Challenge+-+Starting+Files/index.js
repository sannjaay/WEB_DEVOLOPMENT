const h = document.querySelector("body");
var img1 = document.getElementsByClassName("img1")[0];
var img2 = document.getElementsByClassName("img2")[0];
window.addEventListener('load', function() {
    var lol1 = Math.floor(Math.random()*6)+1;
    var lol2 = Math.floor(Math.random()*6)+1;
    img1.setAttribute("src" , `./images/dice${lol1}.png`)
    img2.setAttribute("src" , `./images/dice${lol2}.png`)
    if(lol1>lol2){
        document.querySelector("h1").innerHTML="Player 1 Wins";
    }
    else{
        if(lol1<lol2){
            document.querySelector("h1").innerHTML="Player 2 Wins";
        }
        else{
            document.querySelector("h1").innerHTML="Draw";
        }
    }

});
