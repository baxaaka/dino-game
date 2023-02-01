
const box = document.querySelector(".box");


const def = document.querySelector(".def");




const section = document.querySelector(".section");

 const input = document.querySelector("input");


input.value = 0;



 
// ////////////////////////////////////////////
 

let addRun= 0

function run(){
  if(dispatchEvent.classList != "run"){

    addRun -= 10  

    box.classList.add("run")
    box.classList.remove("def")
  
    box.style.right = addRun + "px"
 

    if(input.value> 0 && input.value >20){
      // alert("yesss")

        // location.reload()
     
     
    }

 
    // setTimeout(function() {
    
    
    input.value++
      
    
    // }, 5000);
  }
}


function runStop(){
  box.classList.remove("run")
  box.classList.add("def")



 
  


}





let addRun2= 0

function runLeft(){
  if(dispatchEvent.classList != "runLeft"){

    addRun2 -= 10    

    box.classList.add("runLeft")
    box.classList.remove("defLeft")
    box.classList.remove("def")
  
    box.style.left = addRun2 + "px"
 
  
  }
}


function runLeftStop(){
  box.classList.remove("runLeft")
  box.classList.add("defLeft")



 
  


}



let tpp = 0

function topRun(){
  tpp -=1

  box.style.top=tpp +"px"
}

function jump(){
  
  if(dispatchEvent.classList != "jump"){
    box.classList.add("jump")
    
  }

 

  if(input.value> 0 && input.value >17){
    box.style.top ="80px"
    box.style.left= "100px"

 
}

  setTimeout(() => {
    box.classList.remove("jump")
    
  }, 200);


 }

 
function trass(){
  if(dispatchEvent.classList != "trass"){
    section.classList.add("trass")
   
  
  
  }
}


function trassStop(){
  setTimeout(function() {
    
    section.classList.remove("trass")
  
  }, 300);
}



function attack(){
  if(dispatchEvent.classList != "attack"){
    box.classList.add("attack")
    setTimeout(() => {
      box.classList.remove("attack")
      
    }, 600);
  
  }



}



function attack2(){
  if(dispatchEvent.classList != "attack2"){
    box.classList.add("attack2")
    setTimeout(() => {
      box.classList.remove("attack2")
      
    }, 600);
  
  }



}

function jumpAtack(){
  if(dispatchEvent.classList != "jumpAtack"){
    box.classList.add("jumpAtack")
    
  }
  setTimeout(() => {
    box.classList.remove("jumpAtack")
    
  }, 2000);


 }




 
let rar = 0
// let rar2 = 0

// let inn = input.value

//  function gameOver(){


   
//    rar2 -= -200

 

   
//   }else{
//     alert("game over")

//   }
//  }
 

// gameOver()






document.addEventListener( "keydown" , function(e){
  
 



   if(e.keyCode == '87' ){
    // jump()
    topRun()
  }
  
  if(e.keyCode == '65'){
   
    runLeft()
    
  }

  if(e.keyCode == '68' ){
    run()
  }
  
  // if(e.key == 'ArrowUp' && e.keyCode == '13' ){
  //   jumpAtack()
  //   jump()
  // }

})

document.addEventListener("dblclick" , ()=>{
  attack2()
})

document.addEventListener("mousedown" , ()=>{
  attack()
  sward()
  trass()
 

})


document.addEventListener("mouseup" , ()=>{

  

    trassStop()
    
  
})


document.addEventListener( "keyup" , function(e){
  if(e.keyCode == '68'){
    runStop()
  
  }
 
  if(e.keyCode == '65'){
  
    runLeftStop()
  }

  
 
  
 })









 function sward() {
  var sward = new Audio("./audio/sward.wav");
  sward.volume = "0.1";
  sward.play();
 }




//  ------------------------box 2 dushman ---------------------------------------------

let input2 =document.querySelector(".input2")

input2.value = 0;
const box2 = document.querySelector(".box2");

const def2 = document.querySelector(".def2");

let addRun11= 0

function run2(){
  if(dispatchEvent.classList != "run2"){

    addRun11 -= 10  

    box2.classList.add("run2")
    box2.classList.remove("def2")
    
    box2.style.right = addRun11 + "px"
 

    if(input2.value> 0 && input2.value >20){
      if(box2.style.top ="100px"){
        alert("yesss")

        // location.reload()
    
      }
     
     
    }

    input2.value++


  }
}


function runStop2(){
  box2.classList.remove("run2")
  box2.classList.add("def2")
}


let addRun22= 0

function runLeft2(){
  if(dispatchEvent.classList != "run"){

    addRun22 -= 10    

    box2.classList.add("run2")
    box2.classList.remove("def")
  
    box2.style.right = addRun22 + "px"
 
 
  }
}


function runLeftStop2(){
  box2.classList.remove("run2")
  box2.classList.add("def2")
}



let tpp2 = 0

function topRun2(){
  tpp2 -=1

  box2.style.top=tpp2 +"px"
}

function jump2(){
  
  if(dispatchEvent.classList != "jump2"){
    box2.classList.add("jump2")
    
  }

 

  if(input2.value> 0 && input2.value >17){
    box2.style.top ="80px"
    box2.style.left= "100px"

 
}

  setTimeout(() => {
    box2.classList.remove("jump2")
    
  }, 200);


 }

 
function trass2(){
  if(dispatchEvent.classList != "trass2"){
    section.classList.add("trass2")
   
  
  
  }
}


function trassStop2(){
  setTimeout(function() {
    
    section.classList.remove("trass2")
  
  }, 300);
}



function attack22(){
  if(dispatchEvent.classList != "attack22"){
    box2.classList.add("attack22")
    setTimeout(() => {
      box2.classList.remove("attack22")
      
    }, 600);
  
  }



}




function attack33(){
  if(dispatchEvent.classList != "attack33"){
    box2.classList.add("attack33")
    setTimeout(() => {
      box2.classList.remove("attack33")
      
    }, 600);
  
  }



}





document.addEventListener("dblclick" , ()=>{
  attack33()
})


document.addEventListener( "keydown" , function(e){
  
 
  if(e.keyCode == '37' ){
    run2()

  

    // rar -= 5
   
    
 
  }


   if(e.keyCode == '38' ){
    // jump()
    topRun2()
  }
  
  if(e.keyCode == '39'){
   
    runLeft2()
    
  }
  
  // if(e.key == 'ArrowUp' && e.keyCode == '13' ){
  //   jumpAtack()
  //   jump()
  // }

})


document.addEventListener("mousedown" , ()=>{
  attack22()

  trass2()
  // input.value++


 


})


document.addEventListener("mouseup" , ()=>{

    
    trassStop2()
    
  
})


document.addEventListener( "keyup" , function(e){
  if(e.keyCode == '37'){
    runStop2()
  
  }
 
  if(e.keyCode == '39'){
  
    runLeftStop2()
  }

  

  
 })

