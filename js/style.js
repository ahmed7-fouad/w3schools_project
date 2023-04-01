let search_icon_frame=document.querySelector('.search_icon');
let search_icon_frame2=document.querySelector('#second_nav .search_icon');
let search_icon=document.querySelector('.search_icon > i');
let search_icon2=document.querySelector('#second_nav .search_icon i');
let search_bar=document.querySelector('.search_icon > form');
let search_bar2=document.querySelector('#second_nav .search_icon > form');
let nav_burger_bars=document.querySelector('.selection_bars');
let nav_burger_bars2=document.getElementById('second_mobile_bars');
let mobile_nav_links=document.querySelector('.mobile_nav_links');
let changer_text=document.getElementById('changer_text');
let main_nav=document.getElementById('main_nav');
let second_nav=document.getElementById('second_nav');
let top_btn=document.getElementById('top_btn');
let changer=0;
let changer2=0;
let changer3=0;
let changer4=0;


search_icon.addEventListener('click', function(){
    if(changer===0){
    search_icon_frame.style.cssText="background-color:red";
    search_icon.style.cssText='color:white';
    search_bar.style.cssText='right:calc(100% + 57px);';
    changer=1;
}
else{
    search_icon_frame.style.cssText="background-color:transparent";
    search_icon.style.cssText='color:#777';
    search_bar.style.cssText='right:-1000px';
    changer=0;
}
})
search_icon2.addEventListener('click', function(){
    if(changer3===0){
    search_icon_frame2.style.cssText="background-color:red";
    search_icon2.style.cssText='color:white';
    search_bar2.style.cssText='right:calc(100% + 57px);';
   changer3=1;
}
else{
    search_icon_frame2.style.cssText="background-color:transparent";
    search_icon2.style.cssText='color:#777';
    search_bar2.style.cssText='right:-1000px';
    changer3=0;
}
})

nav_burger_bars.addEventListener('click',function(){
    if(changer2===0){
    mobile_nav_links.style.cssText='visibility:hidden';    
   changer2=1;
}
else 
{
    mobile_nav_links.style.cssText='visibility:visible';    
changer2=0
}
}
)

nav_burger_bars2.addEventListener('click',function(){
    if(changer2===0){
    mobile_nav_links.style.cssText='visibility:hidden';    
   changer2=1;
}
else 
{
    mobile_nav_links.style.cssText='visibility:visible';    
changer2=0
}
}
)

window.onscroll=function(){
    if(scrollY>=106){
        main_nav.style.cssText='display:none !important';
        second_nav.style.cssText='top:0';
    }
    else {
        main_nav.style.cssText='display:block !important';
        second_nav.style.cssText='top:-100px';
    }
}

top_btn.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})