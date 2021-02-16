const navButtton = document.querySelector(".nav-button");
const list=document.querySelector("ul");
const listItems= document.querySelectorAll('li');
navButtton.addEventListener('click',()=>{
  if(list.style.display==='none'|| list.style.display===''){
    list.style.display='flex';
  }
  else{
    list.style.display='';
  }
});
listItems[0].addEventListener('click',()=>{
  if(list.style.display==='none'|| list.style.display===''){
    list.style.display='flex';
  }
  else{
    list.style.display='';
  }
});

listItems[1].addEventListener('click',()=>{
  if(list.style.display==='none'|| list.style.display===''){
    list.style.display='flex';
  }
  else{
    list.style.display='';
  }
});

listItems[2].addEventListener('click',()=>{
  if(list.style.display==='none'|| list.style.display===''){
    list.style.display='flex';
  }
  else{
    list.style.display='';
  }
});
