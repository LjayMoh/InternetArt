var wholeimgContainer = document.getElementById("wholeimgContainer");
var wholeimg = document.getElementById("wholeimg");

function openWholeImg(photo){
    wholeimgContainer.style.display = "flex";
    wholeimg.src = photo;
}

function closeWholeImg(photo){
    wholeimgContainer.style.display = "none";
    wholeimg.src = photo;
}