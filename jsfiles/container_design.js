const shopcontainerr = document.getElementById("shopcontainerr");
const toggle = document.getElementById("toggle");

shopcontainerr.addEventListener("onmouseover", function(event){
    console.log(event);
    if(toggle.style.height === "0"){
        toggle.style.height === "2rem"
    }else{
        toggle.style.height === "0"
    }
});
