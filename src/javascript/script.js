const bars = document.querySelector('#bars')
const xmark = document.querySelector('#xmark')
const navlist = document.querySelector("#nav-list")


bars.addEventListener('click',()=>{

        bars.classList.add("opacity-0", "scale-0", 'hidden')
        bars.classList.remove("opacity-100", "scale-100")

        
        xmark.classList.add("opacity-100", "scale-100")
        xmark.classList.remove("opacity-0", "scale-0",'hidden')
        navlist.classList.remove('hidden')
        navlist.classList.add('flex')
        
    
})
xmark.addEventListener('click',()=>{

        bars.classList.add('opacity-100','scale-100')
        bars.classList.remove('opacity-0','scale-0', 'hidden')
    
        xmark.classList.add('opacity-0','scale-0', 'hidden')
        xmark.classList.remove('opacity-100','scale-100')

        navlist.classList.remove('flex')
        navlist.classList.add('hidden')
})