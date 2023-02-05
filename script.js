const box = document.querySelector(".box");

const def = document.querySelector(".def");

const section = document.querySelector(".section");

const input = document.querySelector("input");


input.value = 0;

// ////////////////////////////////////////////

let addRun = 0;

function run() {
  if (dispatchEvent.classList != "run") {
    addRun -= 20;

    box.classList.add("run");
    box.classList.remove("def");

    box.style.right = addRun + "px";
    // attack22() 
    // setTimeout(() => {
     
    //   run2() 
    // }, 1000);
 
    if (input.value > 0 && input.value > 20) {
      // alert("yesss")
      // location.reload()
    }

    // setTimeout(function() {

    input.value++;

    // }, 5000);
  }
}

function runStop() {
  box.classList.remove("run");
  box.classList.add("def");
}

// let addRun2 = 0;

function runLeft() {
  if (dispatchEvent.classList != "runLeft") {
    addRun -= -20;

    box.classList.add("runLeft");
    box.classList.remove("defLeft");
    box.classList.remove("def");
    box.style.right = addRun + "px";
  }
}

function runLeftStop() {
  box.classList.remove("runLeft");

  box.classList.add("def");
}

let tpp = 0;

function topRun() {
  tpp -= 1;

  box.style.top = tpp + "px";
}

function jump() {
  if (dispatchEvent.classList != "jump") {
    box.classList.add("jump");
  }

  if (input.value > 0 && input.value > 17) {
    box.style.top = "80px";
    box.style.left = "100px";
  }

  setTimeout(() => {
    box.classList.remove("jump");
  }, 200);
}

function trass() {
  if (dispatchEvent.classList != "trass") {
    section.classList.add("trass");
  }
}

function trassStop() {
  setTimeout(function () {
    section.classList.remove("trass");
  }, 300);
}

function attack() {
  if (dispatchEvent.classList != "attack") {
    box.classList.add("attack");
    setTimeout(() => {
      box.classList.remove("attack");
    }, 600);
  }
}

function attack2() {
  if (dispatchEvent.classList != "attack2") {
    box.classList.add("attack2");
    setTimeout(() => {
      box.classList.remove("attack2");
    }, 600);
  }
}

function jumpAtack() {
  if (dispatchEvent.classList != "jumpAtack") {
    box.classList.add("jumpAtack");
  }
  setTimeout(() => {
    box.classList.remove("jumpAtack");
  }, 2000);
}

let rar = 0;
// let rar2 = 0

// let inn = input.value

//  function gameOver(){

//    rar2 -= -200

//   }else{
//     alert("game over")

//   }
//  }

// gameOver()

document.addEventListener("keydown", function (e) {
  if (e.keyCode == "87") {
    // jump()
    topRun();
  }

  if (e.keyCode == "65") {
    runLeft();
  }

  if (e.keyCode == "68") {
    run();
  }

  // if(e.key == 'ArrowUp' && e.keyCode == '13' ){
  //   jumpAtack()
  //   jump()
  // }
});

document.addEventListener("dblclick", () => {
  attack2();
});

document.addEventListener("mousedown", () => {
  attack();
  sward();
  trass();
});

document.addEventListener("mouseup", () => {
  trassStop();
});

document.addEventListener("keyup", function (e) {
  if (e.keyCode == "68") {
    runStop();
  }

  if (e.keyCode == "65") {
    runLeftStop();
  }
});



// ------- sttt









function swar() {
  var sward = new Audio("./audio/sward2.wav");
  sward.volume = "1.0";
  sward.play();
}








//  ------------------------box 2 dushman ---------------------------------------------






let input2 = document.querySelector(".input2");

input2.value = 0;
const box2 = document.querySelector(".box2");

// const def2 = document.querySelector(".def2");

let addRun11 = 0;

function run2() {
  if (dispatchEvent.classList != "run2") {
    addRun11 -= 20;

    box2.classList.add("run2");
    box2.classList.remove("def2");

    box2.style.left = addRun11 + "px";

    if (input2.value > 0 && input2.value > 20) {
      // alert("yesss");

      // location.reload()
    }

    input2.value++;
  }
}

function runStop2() {
  box2.classList.remove("run2");
  box2.classList.add("def2");
}

// let addRun22 = 0;

function runLeft2() {
  if (dispatchEvent.classList != "runLeft22") {
    addRun11 -= -20;
  
    box2.classList.add("runLeft22");
    box2.classList.remove("de");

    box2.style.left = addRun11 + "px";
  
  }
}

function runLeftStop2() {
  box2.classList.remove("runLeft2");
  box2.classList.add("de");
}

// let tpp2 = 0;

// function topRun2() {
//   tpp2 -= 1;

//   box2.style.top = tpp2 + "px";
// }

function jump2() {
  if (dispatchEvent.classList != "jump2") {
    box2.classList.add("jump2");
  }

  // if (input2.value > 0 && input2.value > 17) {
  //   box2.style.top = "80px";
  //   box2.style.left = "100px";
  // }

  setTimeout(() => {
    box2.classList.remove("jump2");
  }, 200);
}

function trass2() {
  if (dispatchEvent.classList != "trass2") {
    section.classList.add("trass2");
  }
}

function trassStop2() {
  setTimeout(function () {
    section.classList.remove("trass2");
  }, 300);
}

function attack22() {
  if (dispatchEvent.classList != "attack22") {
    box2.classList.add("attack22");
    setTimeout(() => {
      box2.classList.remove("attack22");
    }, 600);
  }
}

function attack33() {
  if (dispatchEvent.classList != "attack33") {
    box2.classList.add("attack33");
    setTimeout(() => {
      box2.classList.remove("attack33");
    }, 600);
  }
}

function death2() {
  if (dispatchEvent.classList != "death2") {
    box2.classList.add("death2");
    deathAudio2();
   
   setTimeout(() => {
    finish()

   }, 500);

   setTimeout(() => {
    alert("You win")
    location.reload()
   }, 1500);
    setTimeout(() => {
      // box2.style.animationPlayState = "paused";
    }, 600);
  }
}


const bloodd11 = document.querySelector(".blood11")

function blood11(){

  bloodd11.style.display="block"
  
  setTimeout(() => {
    
  bloodd11.style.display="none"
  }, 500);
 
  
}


document.addEventListener("dblclick", () => {
  attack33();

});

document.addEventListener("keydown", function (e) {
  if (e.keyCode == "37") {
    run2();
  }

  if (e.keyCode == "38") {
    // jump()
   
  }

  if (e.keyCode == "39") {
    runLeft2();
  }

  // if(e.key == 'ArrowUp' && e.keyCode == '13' ){
  //   jumpAtack()
  //   jump()
  // }
});

document.addEventListener("mousedown", () => {
  attack22()
 
  trass2();
  input2.value++;

  if (input2.value > 0 && input2.value > 45) {
    death2();

  }
  // attack22() 
  blood11()

});

document.addEventListener("mouseup", () => {
  trassStop2();
});

document.addEventListener("keyup", function (e) {
  if (e.keyCode == "37") {
    runStop2();
   
  }

  if (e.keyCode == "39") {
    runLeftStop2();
  }
});

function deathAudio2() {
  var death2 = new Audio("./audio/blade.wav");
  death2.volume = "1.0";
  death2.play();
}

function finish() {
  var finish = new Audio("./audio/fitality.mp3");
  finish.volume = "1.0";
  finish.play();
}

function bgMusic() {
  var bgMusic = new Audio("./audio/bg-music.ogg");
  bgMusic.volume = "0.1";
  bgMusic.play();
}







//---------- menu---------

const menu = document.querySelector(".menu")

const start = document.querySelector(".start")

const restart = document.querySelector(".restart")

const about = document.querySelector(".about")

const exet = document.querySelector(".exet")








function startHover() {
  var startHover = new Audio("./audio/hover.wav");
  startHover.volume = "1.0";
  startHover.play();

}

function startClick() {
  var startClick = new Audio("./audio/start.wav");
  startClick.volume = "1.0";
  startClick.play();
  menu.style.display="none"

}

function restartHover() {
  var startHover = new Audio("./audio/hover.wav");
  startHover.volume = "1.0";
  startHover.play();

}

function restartClick() {
  var startClick = new Audio("./audio/open.wav");
  startClick.volume = "1.0";
  startClick.play();

}




function exetClick() {
  var startClick = new Audio("./audio/open.wav");
  startClick.volume = "1.0";
  startClick.play();
  window.close()

}

start.addEventListener( "mouseover" , ()=>{
 
startHover()

   
})



  
start.addEventListener( "click" , ()=>{
 
  startClick()
     
  })


  restart.addEventListener( "mouseover" , ()=>{
 
    restartHover()
    
       
    })
  
restart.addEventListener( "click" , ()=>{
    restartClick()
  })

  exet.addEventListener( "click" , ()=>{
    exetClick()
  })


