let loading = document.getElementById("loading");
setTimeout(function(){
    loading.style.opacity = 0;
    setTimeout(function(){
        loading.style.display = "none"
    },5000);
},5000);