function sideNav() {
    document.querySelector('.nav-list').classList.remove("fadeOutRight");
    document.querySelector('.nav-list').style["z-index"] = `1`;
    document.querySelector('.nav-list').classList.add("fadeInRight");
    document.querySelector('.hamburger').style.display = "none";
    document.querySelector('.main-container').style.opacity = "0.4";
    document.querySelector('h1').style.opacity = "0.2";
    document.querySelector('.nav-list').style.transition = `100ms`;
    document.querySelector('.nav-list').style.visibility = `visible`
}
function cross() {
    document.querySelector('.nav-list').classList.remove("fadeInRight");
    document.querySelector('.nav-list').classList.add("fadeOutRight");
    document.querySelector('.nav-list').style.transition = `1s`;
    document.querySelector('h1').style.opacity = "1";
    document.querySelector('.main-container').style.opacity = "1";
    document.querySelector('.hamburger').style.display = "block";
}