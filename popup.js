const purchaseBut=document.querySelectorAll('.package-request');
const popupPurchase= document.querySelector('.popup-purchase');
const closeSpan=document.querySelector('.close');
const requestedText=document.querySelector('.requested-type');

purchaseBut[0].addEventListener('click',()=>{
  popupPurchase.style.display='block';
  requestedText.value="Individuals";
})
closeSpan.addEventListener('click',()=>{
  popupPurchase.style.display = "none";
})
window.onclick = function(event) {
  if (event.target == popupPurchase) {
    popupPurchase.style.display = "none";
  }
}
