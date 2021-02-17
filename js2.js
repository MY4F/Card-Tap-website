const navButtton = document.querySelector(".nav-button");
const list=document.querySelector("ul");
const listItems= document.querySelectorAll('li');
const desktopContainer=document.querySelector('.desktop-container');
const bodyy=document.querySelector('body');
navButtton.addEventListener('click',()=>{
  if(list.style.display==='none' && window.innerWidth<751|| list.style.display===''  && window.innerWidth<751 ){
    list.style.display='flex';
  }
  else{
    list.style.display='';
  }
});
listItems[0].addEventListener('click',()=>{
  if(list.style.display==='none'  && window.innerWidth<751|| list.style.display===''  && window.innerWidth<751){
    list.style.display='flex';
  }
  else{
    list.style.display='';
  }
});

listItems[1].addEventListener('click',()=>{
  if(list.style.display==='none' && window.innerWidth<751|| list.style.display==='' && window.innerWidth<751){
    list.style.display='flex';
  }
  else{
    list.style.display='';
  }
});

listItems[2].addEventListener('click',()=>{
  if(list.style.display==='none'  && window.innerWidth<751|| list.style.display===''  && window.innerWidth<751){
    list.style.display='flex';
  }
  else{
    list.style.display='';
  }
});
