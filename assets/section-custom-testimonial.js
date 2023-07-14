//set flickity wrap around false for mobile on
if(window.innerWidth < 990){
    document.querySelector(".testimonial_main_container .card_container").setAttribute("data-flickity", `{ "prevNextButtons" : true, "pageDots": true, "draggable": true, "cellAlign": "center", "initialIndex": 1, "wrapAround": false, "bgLazyLoad": 1, "autoPlay": 2500, "friction": 0.175 }`)
}

window.addEventListener("resize", adjustFlickity);

//set flickity wrap around true for desktop on window resize
function adjustFlickity(){
    if(window.innerWidth < 990){
        document.querySelector(".testimonial_main_container .card_container").setAttribute("data-flickity", `{ "prevNextButtons" : true, "pageDots": true, "draggable": true, "cellAlign": "center", "initialIndex": 1, "wrapAround": false, "bgLazyLoad": 1, "autoPlay": 2500, "friction": 0.175 }`);
    } else{
        document.querySelector(".testimonial_main_container .card_container").setAttribute("data-flickity", `data-flickity='{ "prevNextButtons" : true, "pageDots": true, "draggable": true, "cellAlign": "center", "initialIndex": 1, "wrapAround": true, "bgLazyLoad": 1, "autoPlay": 2500, "friction": 0.175 }'`);
    } 
}