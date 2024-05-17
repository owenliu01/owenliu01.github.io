let loading = document.getElementById("loading");
setTimeout(function(){
    loading.style.opacity = 0;
    loading.addEventListener('wheel', function(e) {
        e.preventDefault();
    }, { passive: false });
    setTimeout(function(){
        loading.style.display = "none"
    },1000);
},3000);