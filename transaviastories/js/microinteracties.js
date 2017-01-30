var menubutton = document.querySelector("footer .delen > img");

menubutton.addEventListener("click", function(){
    
    this.parentNode.classList.toggle("menutonen");
    
});


var downloadbutton = document.querySelector(".verhaalinfo  .download ");

downloadbutton.addEventListener("click", function(){
    
    this.classList.toggle("download-click");
    var bevestig = document.querySelector(".download-bevestig");
    bevestig.classList.toggle("downloaded");

});



