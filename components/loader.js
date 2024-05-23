let loading = document.getElementById("loading");
setTimeout(function(){
    loading.style.opacity = 0;
    window.removeEventListener('wheel', preventScroll, {passive: false});
    setTimeout(function(){
        loading.style.display = "none";
        window.addEventListener('wheel',preventScroll, {passive: fasle});
    },1000);
},3000);

function preventScroll(e){
    e.preventDefault();
}