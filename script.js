function copy(el){
  const text = el.innerText;
  navigator.clipboard.writeText(text);
  el.innerText = "✔ Disalin!";
  setTimeout(()=> el.innerText = text,1200);
}

const cards=document.querySelectorAll(".card,.highlight-card");
cards.forEach((c,i)=>{
  c.style.animationDelay = (i*0.06)+"s";
});
