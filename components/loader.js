let loading = document.getElementById("loading");

window.addEventListener('wheel',preventScroll, {passive: false});

setTimeout(function(){
    loading.style.opacity = 0;
    setTimeout(function(){
        loading.style.display = "none";
        window.removeEventListener('wheel', preventScroll, {passive: false});
    },990);
},2000);

function preventScroll(e){
    e.preventDefault();
}