const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var tl = gsap.timeline()

tl .from("h2",{
    y:-30,
    opacity:0,
    duration:0.80,
    delay:0.30,

})
tl .from(".IMG",{
    y:-30,
    opacity:0,
    duration:0.30,
    delay:0.10,

})
// var tl = gsap.timeline()

tl .from(".nav",{
    y:-30,
    opacity:0,
    duration:0.30,
    delay:0.10,

})
tl .from("#pge1 h1",{
    y:30,
    opacity:0,
    duration:0.30,
    delay:0.10,
    stagger:1,
})


document.addEventListener("mousemove",function(dets){
    gsap.to(".courser",{
        left:dets.x,
        top:dets.y
    })
})

// ya sara jo 4 box ha unka courser ha 
document.querySelector("#bx1").addEventListener("mouseenter",function(){
    gsap.to(".courser",{
        transform:'translate(-50%,-50%) scale(1)'

    })
})
document.querySelector("#bx1").addEventListener("mouseleave",function(){
    gsap.to(".courser",{
        transform:'translate(-50%,-50%) scale(0)'
        
    }

    )
})

document.querySelector("#bx2").addEventListener("mouseenter",function(){
    gsap.to(".courser",{
        transform:'translate(-50%,-50%) scale(1)'

    })
})
document.querySelector("#bx2").addEventListener("mouseleave",function(){
    gsap.to(".courser",{
        transform:'translate(-50%,-50%) scale(0)'
        
    })
})

document.querySelector("#bx3").addEventListener("mouseenter",function(){
    gsap.to(".courser",{
        transform:'translate(-50%,-50%) scale(1)'

    })
})
document.querySelector("#bx3").addEventListener("mouseleave",function(){
    gsap.to(".courser",{
        transform:'translate(-50%,-50%) scale(0)'
        
    })
})

document.querySelector("#bx4").addEventListener("mouseenter",function(){
    gsap.to(".courser",{
        transform:'translate(-50%,-50%) scale(1)'

    })
})
document.querySelector("#bx4").addEventListener("mouseleave",function(){
    gsap.to(".courser",{
        transform:'translate(-50%,-50%) scale(0)'
        
    })
})

// image 1st ka upper bala coirser ha 
document.querySelector("#bx5").addEventListener("mouseenter",function(){
    gsap.to(".courser",{
        transform:'translate(-50%,-50%) scale(1)'

    })
})
document.querySelector("#bx5").addEventListener("mouseleave",function(){
    gsap.to(".courser",{
        transform:'translate(-50%,-50%) scale(0)'
        
    })
})