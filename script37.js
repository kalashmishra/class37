gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

var tl=gsap.timeline();
    gsap.set(".a",{opacity:0,y:30})
    gsap.set(".b",{opacity:0,y:-35})
    gsap.set(".c",{opacity:0,y:35})
    gsap.set(".d",{opacity:0,y:5})
 
    tl.to("#overlay",{
        opacity:0,
          delay:3,
        ease:Power1
        
    })
    tl.to("#nav",{
        opacity:1,
          ease:Power1
        
    })
  
   tl.to(".a",{
        opacity:1,
        y:0,
        stagger:.2,
        ease:Power1,
        delay:.5
    })
    tl.to(".b",{
        opacity:1,
        y:0,
        delay:.5,
  ease:Power1
        },"a")
    tl.to(".c",{
        opacity:1,
        y:0,
     ease:Power1
       
 },"a")
 var t2=gsap.timeline(
    {
        scrollTrigger:{
            trigger:"#third",
            start:"top top",
         scroller: "#main",
           // markers:true,
  scrub:1
             }
        
     });

   
 t2.to(".d",{
    opacity:1,
    y:0,
    stagger:.1,
    ease:Power1,
    
})
var t3=gsap.timeline(
    {
        scrollTrigger:{
            trigger:"#forth",
            start:"top 30%",
 scroller: "#main",
   // markers:true,
    
 scrub:1
             }
        
     });

   
 t3.to("#sec",{
    ease:Power1,
    scale:1.5,
    delay:.1
    },"a")

t3.to("#one",{
    ease:Power1,
    transform:`translate3d(0px, -47.1441%, 0px) rotate(-14.0953deg)` ,
    duration:0.2

 
    
    },"a")

t3.to("#two",{
    ease:Power1,
    transform:`translate3d(0px, -20.9529%, 0px) rotate(3.3572deg)` ,
    duration:0.2
    
 
    
},"a")
var t4=gsap.timeline(
    {
        scrollTrigger:{
            trigger:"#fifth",
            start:"top 30%",
  scroller: "#main",
  //  markers:true,

             scrub:1
             }
           });

   
 t4.to("#thi",{
    ease:Power1,
    scale:1.5,
    delay:.1
 
    },"a")
t4.to("#three",{
    ease:Power1,
    transform:`translate3d(0px, -47.1441%, 0px) rotate(-14.0953deg)` ,
    duration:0.2
    
 
    
},"a")

t4.to("#four",{
    ease:Power1,
    transform:`translate3d(0px, -20.9529%, 0px) rotate(3.3572deg)` ,
    duration:0.2

 

},"a")
var t5=gsap.timeline(
    {
        scrollTrigger:{
            trigger:"#sixth",
            start:"top 30%",
 scroller: "#main",
  //  markers:true,
 scrub:1
             }
        
     });

   
 t5.to("#for",{
    ease:Power1,
    scale:1.5,
    delay:.1
 
    },"a")
t5.to("#five",{
    ease:Power1,
    transform:`translate3d(0px, -47.1441%, 0px) rotate(-14.0953deg)` ,
    duration:0.2
 
    
    },"a")

t5.to("#six",{
    ease:Power1,
    transform:`translate3d(0px, -20.9529%, 0px) rotate(3.3572deg)` ,
    duration:0.2
    
 

},"a")

var t6=gsap.timeline(
    {
        scrollTrigger:{
            trigger:"#seventh",
            start:"top 30%",
 scroller: "#main",
   // markers:true,
 scrub:1
             }
        
     });

   
 t6.to("#fiv",{
    ease:Power1,
    scale:1.5,
    delay:.1
 
    },"a")
t6.to("#seven",{
    ease:Power1,
    transform:`translate3d(0px, -47.1441%, 0px) rotate(-14.0953deg)` ,
    duration:0.2
 
    
    },"a")

t6.to("#eight",{
    ease:Power1,
    transform:`translate3d(0px, -20.9529%, 0px) rotate(3.3572deg)` ,
    duration:0.2
    
 

},"a")

var t7=gsap.timeline(
    {
        scrollTrigger:{
            trigger:"#eighth",
            start:"top 30%",
 scroller: "#main",
   // markers:true,
 scrub:1
             }
        
     });

   
 t7.to("#sx",{
    ease:Power1,
    scale:1.5,
    delay:.1
 
    },"a")
t7.to("#nine",{
    ease:Power1,
    transform:`translate3d(0px, -47.1441%, 0px) rotate(-14.0953deg)` ,
    duration:0.2

 
    
    },"a")

t7.to("#ten",{
    ease:Power1,
    transform:`translate3d(0px, -20.9529%, 0px) rotate(3.3572deg)` ,
    duration:0.2
 

},"a")


var t8=gsap.timeline(
    {
        scrollTrigger:{
            trigger:"#tenth",
            start:"top 50%",
    
         scroller: "#main",
         //   markers:true,
  scrub:1
             }
        
     });

    
 t8.to("#smile",{
    opacity:1,
    top:"-30%",
    duration:.01,
    ease:Power1
    
})
var t9=gsap.timeline(
    {
        scrollTrigger:{
            trigger:"#nineth",
            start:"top top",
        
            
  scroller: "#main",
   // markers:true,

             scrub:1
             }
           });

   
 t9.to("#hover",{
    ease:Power1,

    scale:1,
    duration:.01
 
    },"a")


  
function animationCircle(){
    const text=document.querySelector("#oval-text p");
text.innerHTML=text.innerHTML
.split("")
.map(
    (char,i) => 
`<span style="transform:rotate(${i * 8}deg) ">${char}</span>`
).join("")

 const text2=document.querySelector("#oval-text2 p");
 text2.innerHTML=text2.innerHTML
 .split("")
 .map(
     (char,i) => 
`<span style="transform:rotate(${i * 8}deg) ">${char}</span>`
).join("")




}
animationCircle();