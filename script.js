"use strict"



const box =document.querySelector('.box')

const section =document.querySelector('section')

const bgg =document.querySelector(".bgg")
const bgg2 =document.querySelector(".bgg2")
const bgg3 =document.querySelector(".bgg3")

const input =document.querySelector("input")

input.value=1


function aud(){
  
  var audio = new Audio("./audio/jum.wav")
  audio.play()
  audio.volume= "0.2"
  }
  

document.addEventListener("click" ,(e) =>{

      aud()
       
        console.log('hello');
       
      box.style.transform="translateY(-60px) " 
    
     box.style.transition = "all 0.3s ";
 
     input.value++

     setTimeout(() => {
      box.style.transform="translateY(90px)"
      // box.style.transform="translateX(-500px)"
    
    }, 300);

    // if(bgg.style.transform = "translateX(-190px)" ){
    //   location.reload()
    // }

    // if(e.key == 'ArrowDown' ){
    //     console.log('hello');
    

    //  box.style.transition = "all 0.5s"
 
    // }
  
  
    // let dd =0


    // if(index<1){
    //   index++;


    //   console.log('hello');
 
    
    //  box.style.transition = "all 1s cubic-bezier(.69,-0.32,.38,1.57)"
   
    // }


    // setTimeout(() => {
    //   if(e.key == 'ArrowLeft'  ){
    //     console.log(dd);
    //    box.style.transform="translateX(-300px)"

    //   // box.style.transform="translateX("+dd*1-100+"px)"


    //  box.style.transition = "all 1s cubic-bezier(.69,-0.32,.38,1.57)"


 
    // }
    // }, 2000);

    

    
    
   
})








// menu

const menu =document.querySelector(".menu")
const start =document.querySelector(".start")
const restart =document.querySelector(".restart")
const round1 =document.querySelector(".round1")
const round2 =document.querySelector(".round2")
const round3 =document.querySelector(".round3")
const burger =document.querySelector(".burger")


function figh(){

  var fight = new Audio("./audio/fight.mp3" )
  var fight = new Audio("./audio/mortal -round1.mp3" )
  fight.volume="0.2"
  fight.play()
}
function figh2(){

 
  var fight2 = new Audio("./audio/round2.mp3" )
  fight2.volume="0.2"
  fight2.play()
}
function figh3(){

 
  var fight3 = new Audio("./audio/round3.mp3" )
  fight3.volume="0.2"
  fight3.play()
}

start.addEventListener("click" , ()=>{
  menu.style.display="none"

  
// round1
  setTimeout(() => {
    round1.style.display="block"
    round2.style.display="none"
    round3.style.display="none"
    round1.style.transform=("scale(2)")
    figh()
  }, 500);
// round2
  setTimeout(() => {
    round2.style.display="block"
    round1.style.display="none"
    round3.style.display="none"
    figh2()
   
    bgg.classList.add("bgg2")
    bgg.classList.remove("bgg")
  }, 20000);
// round3
  setTimeout(() => {
    round2.style.display="none"
    round1.style.display="none"
    round3.style.display="block" 

    figh3()
   
  
    bgg2.classList.add("bgg3")
    bgg2.classList.remove("bgg2")
  }, 40000);
 
})

restart.addEventListener("click" ,()=>{


  menu.style.display="none"
    
   
   


})

burger.addEventListener("click" , (e)=>{
  menu.style.display="block"
 
})



