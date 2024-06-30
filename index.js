
var deck=["./images/aukaat.gif","./images/aukaat.gif","./images/balaji.gif","./images/balaji.gif","./images/bestDance.gif","./images/bhai.gif","./images/bestDance.gif","./images/bhai.gif","./images/hato.gif","./images/hato.gif","./images/huh.gif","./images/huh.gif","./images/jogiji.gif","./images/lizard.gif","./images/lizard.gif","./images/jogiji.gif"];
var temp=0;
for (var i = 0; i < 16; i++) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}


var score=0;

for(var i=0;i<16;i++){
   var imagine= document.querySelectorAll(".front-face")[i]
    imagine.setAttribute("src",deck[i]) && imagine.setAttribute("data-framework",deck[i]);
    
}
let hasFlipped=false;
let firstCard,secondCard,firstDiv,secondDiv;
const cards=document.querySelectorAll(".card");


function flipCard(){
    
this.classList.add("flip");
    if(!hasFlipped)
        {
            hasFlipped=true;
            firstDiv=this;
            
            firstCard=this.querySelector(".front-face").getAttribute("src");
         
           
        }
       
    else{
        secondDiv=this;
         secondCard=this.querySelector(".front-face").getAttribute("src");
            hasFlipped=false;
            
           
           if(firstCard===secondCard){
            firstDiv.removeEventListener("click",flipCard);
            secondDiv.removeEventListener("click",flipCard);
            score++;
            document.querySelector("h1").innerHTML="score="+score;
           }
           else{
           setTimeout(function(){ firstDiv.classList.remove("flip");
            secondDiv.classList.remove("flip");},600);

           }
           if(score===8){
           setTimeout(function(){alert(" aapke aage koi bol sakta hai kya!!! ayyy!!");},300);
           }
           
            
        }
    }  
    
        
    var audio=new Audio("./music.mp3");
    audio.play();
    audio.volume=0.4;
        
    


cards.forEach(card=>card.addEventListener("click",flipCard));
        









