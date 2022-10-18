let new1 = document.getElementsByClassName("news1")[0];
let new2 = document.getElementsByClassName("news2")[0];
let new3 = document.getElementsByClassName("news3")[0];
let textt1 = document.getElementsByClassName("text1")[0];
let textt2 = document.getElementsByClassName("text2")[0];
let textt3 = document.getElementsByClassName("text3")[0];
let overl = document.getElementsByClassName("overlay")[0];
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");

b1.onclick = function () {
    new1.style.display = "block";
    overl.style.display = "block";
}
b2.onclick = function () {
    new2.style.display = "block";
    overl.style.display = "block";
}
b3.onclick = function () {
    new3.style.display = "block";
    overl.style.display = "block";
}
textt1.onclick = function () {
    new1.style.display = "none";
    overl.style.display = "none";
}
textt2.onclick = function () {
    new2.style.display = "none";
    overl.style.display = "none";
}
textt3.onclick = function () {
    new3.style.display = "none";
    overl.style.display = "none";
}