let loading = document.getElementById("loading");
setTimeout(function(){
    loading.style.opacity = 0;
    window.addEventListener('wheel', preventScroll, {passive: false});
    setTimeout(function(){
        loading.style.display = "none"
        window.removeEventListener('wheel',preventScroll, {passive: fasle});
    },1000);
},3000);

function preventScroll(e){
    e.preventDefault();
}