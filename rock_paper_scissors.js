let a = 0 ,b=0 ,c=0;
let id;
let palying=false;
let clickButton=document.querySelector(".js-button");
function autoplay(){
    if(palying==false){
   id= setInterval(() => {
        result(computermove());
    }, 1000);
    palying=true;
    clickButton.classList.add("clicked");
}
    else{
        clearInterval(id);
        palying=false;
        clickButton.classList.remove("clicked");
    }
}

function result(value){
    let val=computermove();
    if(value===val){
        document.getElementById("demo").innerHTML="Game Tie";
        c=c+1;
        document.getElementById("demo4").innerHTML=c;
        endresult(value,val);
        }
        else if((value=="Rock" && val =="Paper" )||( value=="Paper" && val =="Scisscors" )||( value=="Scisscors" && val =="Rock")){
            document.getElementById("demo").innerHTML="Computer Win";
            endresult(value,val);
            b=b+1;
            document.getElementById("demo3").innerHTML=b;
        }   
        else{
            document.getElementById("demo").innerHTML="You Win";
            endresult(value,val);
            a=a+1;
            document.getElementById("demo2").innerHTML=a;
        }
    }
function computermove(){
    let a=Math.random(0);
    let val;
    console.log(a);
    if(a<0.34){
        val="Rock";
    }
    else if(a>0.334 && a< 0.668){
        val="Paper";
    }
    else{
        val="Scisscors";
    }
    return val;

}
function endresult(value, val){
    document.getElementById("demo1").innerHTML=`you picked <img src="${value}.jpg" height="50px" width="50px" class="icon"> and computer picked <img src="${val}.jpg" height="50px" width="50px">`;
}
function reset(){
    a=0,b=0,c=0;
    document.getElementById("demo2").innerHTML=a;
    document.getElementById("demo3").innerHTML=b;
    document.getElementById("demo4").innerHTML=c;
    document.getElementById("demo").innerHTML="You Reset the score";
    document.getElementById("demo1").innerHTML="";
    clearInterval(id);
    palying=false;
    clickButton.classList.remove("clicked");

}