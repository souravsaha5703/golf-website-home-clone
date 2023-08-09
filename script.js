var curs=document.querySelector("#cursor");
document.addEventListener("mousemove",function(dets){
    curs.style.left= dets.x+"px"
    curs.style.top=dets.y+"px"
});
var blurcurs=document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    blurcurs.style.left= dets.x-150+"px"
    blurcurs.style.top=dets.y-150+"px"
});
var navlinks=document.querySelectorAll("#nav a");
navlinks.forEach(function(elems){
    elems.addEventListener("mouseenter",function(){
        curs.style.scale=3;
        curs.style.border="1px solid #fff";
        curs.style.backgroundColor="transparent";
    })
    elems.addEventListener("mouseleave",function(){
        curs.style.scale=1;
        curs.style.border="0px solid #95C11E";
        curs.style.backgroundColor="#95C11E";
    })

})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"90px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2
    }
});
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -50%",
        end:"top -80%",
        scrub:2
    }
});
gsap.from("#aboutus img,#aboutusin",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
});
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:1
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:1
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})