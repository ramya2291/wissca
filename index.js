const icons=document.getElementsByClassName("icons");
const menu=document.querySelector(".menu");
menu.addEventListener("click",function(){
   if(menu.firstElementChild.name==="close-outline"){
      for(let i=0;i<icons.length;i++){
      icons[i].style.display="none";
      }
      menu.firstElementChild.name="grid-outline";}
   else if(menu.firstElementChild.name==="grid-outline"){
      for(let i=0;i<icons.length;i++){
      icons[i].style.display="flex";
      }
      menu.firstElementChild.name="close-outline";
      menu.firstElementChild.style.transform="rotate('90')";
   }
})
const date=new Date();
const copy=document.querySelector(".copy");
copy.innerHTML=`\u00A9 ${date.getFullYear()} All Rights Reserved By Wissenaire`;
