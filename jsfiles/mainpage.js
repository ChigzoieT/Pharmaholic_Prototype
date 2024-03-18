const dropdown = document.getElementById("dropdown");
const dropdownoptions = document.getElementById("dropdownoptions");
const case101 = document.getElementById("case101");
const clicked = document.getElementById("clicked");
const limp = document.getElementById("limp");
const clickerrr = document.querySelector(".dropdown");
const fff = document.getElementById('fff');
const btn = document.querySelector('.plier');
const buns = document.querySelector('.buns')
const navArea = document.querySelector('.firstcontainer');

btn.addEventListener('click', function nav() {
   
   navArea.classList.remove('hideContainer');
   
});

buns.addEventListener("click", function bly(){
navArea.classList.toggle('hideContainer');
});



/*const nav = () => {
   const navArea = document.querySelector('.firstcontainer');
   

   navArea.classList.toggle('hideContainer');
   
}*/


   const flipper = document.getElementById("flipped");
     flipper.addEventListener('click', function(event){
      console.log(event);
      if(case101.style.height === "0" + "rem"){
         case101.style.height = "41" + "rem"
      }else{
         case101.style.height = "0" + "rem"
      }
     });


     const plier = document.getElementById("plier");
     plier.addEventListener('click', function(event){

      if(fff.style.left === "-10" + "px"){
         fff.style.left="-300" + "px";
      }

     });
















