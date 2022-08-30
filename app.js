const textarea = document.getElementById('textarea')

const totalCounter = document.getElementById('total-counter')
const remainCounter = document.getElementById('remaining-counter')
textarea.addEventListener("keyup", ()=>{
    updateCounter()
}) 
updateCounter()
function updateCounter(){
    totalCounter.innerText= textarea.value.length
    remainCounter.innerText = textarea.getAttribute('maxlength') - textarea.value.length

}
    