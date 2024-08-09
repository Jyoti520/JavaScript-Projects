 

window.addEventListener('DOMContentLoaded',()=>{
    const box = document.querySelectorAll('.box')
    box.forEach((box)=>{
        box.addEventListener('mousemove',()=>{
        console.log('clicked');
            removeAllactive()
            box.classList.add('active')
        })
    })
    
    function removeAllactive(){
    box.forEach((box)=>{
        box.classList.remove('active')
    })
    }
})

