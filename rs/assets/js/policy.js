document.getElementById("privacy-link").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.getElementById("privacy-modal").classList.add("show");
});


document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("privacy-modal").classList.remove("show"); 
});


window.addEventListener("click", function(event) {
    if (event.target === document.getElementById("privacy-modal")) {
        document.getElementById("privacy-modal").classList.remove("show");
    }
});
