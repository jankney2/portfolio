let contactMe= document.getElementById('contactClick')
console.log(contactMe, 'contact')
let exitClick=document.getElementById('exitClick')
let navClick=document.getElementById('contactNav')
let text= document.getElementsByClassName('text')[0]

contactMe.addEventListener('click', ()=>{
  document.getElementById('popUp').classList.remove('hidden')
text.classList.add('hidden')
  
  
})



navClick.addEventListener('click', ()=>{
  document.getElementById('popUp').classList.remove('hidden')
})

exitClick.addEventListener('click', ()=>{
document.getElementById('popUp').classList.add('hidden')

text.classList.remove('hidden')

})