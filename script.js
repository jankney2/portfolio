let contactMe= document.getElementById('contactClick')
console.log(contactMe, 'contact')
let exitClick=document.getElementById('exitClick')



contactMe.addEventListener('click', ()=>{
  document.getElementById('popUp').classList.remove('hidden')
  
  
})

exitClick.addEventListener('click', ()=>{
document.getElementById('popUp').classList.add('hidden')
})