let loading = document.getElementById("loading");
setTimeout(function(){
    loading.style.opacity = 0;
    var yourDiv = document.getElementById("loading");
    yourDiv.addEventListener('wheel', function(e) {
        e.preventDefault();
    }, { passive: false });
    setTimeout(function(){
        loading.style.display = "none"
    },1000);
},3000);