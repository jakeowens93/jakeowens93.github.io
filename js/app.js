const modal = document.getElementById('modal');
const img = document.getElementById('headshot');
const modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');

img.onclick = function(){
    modal.style.display = "block";
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
    modal.style.display = "none";
}
modal.onclick= function(){
    modal.style.display = "none";
}