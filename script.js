let contactMe= document.getElementById('contactClick')
console.log(contactMe, 'contact')
let exitClick=document.getElementById('exitClick')



contactMe.addEventListener('click', ()=>{
  document.getElementById('popUp').classList.remove('hidden')
  document.getElementsByClassName('hero')[0].getElementsByTagName('section')[0].classList.add('hidden')
  
  
})

exitClick.addEventListener('click', ()=>{
document.getElementById('popUp').classList.add('hidden')
document.getElementsByClassName('hero')[0].getElementsByTagName('section')[0].classList.remove('hidden')
})