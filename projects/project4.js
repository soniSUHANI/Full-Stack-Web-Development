var elem = document.querySelectorAll(".elem")
// var elemImage = document.querySelector("#elem1 img")

elem.forEach(function(val){
   
    val.addEventListener("mouseenter",function(){
        val.style.backgroundColor = "red"
        
    });
    val.addEventListener("mouseleave",function(){
        val.style.backgroundColor = "transparent"
    });
})

