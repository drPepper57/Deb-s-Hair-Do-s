/* NAVBAR COLLAPSE*/
$('#toggleButton').click(function () {
    $('#gallery').collapse('toggle');
    $(this).toggleClass('collapsed');
});
/*STARTER_IMAGE*/
function updateStarterImgSrc() {
    const starterImg = document.querySelector("#starterImg");
    if (window.matchMedia("(min-width: 600px)").matches) {
        starterImg.src = "imgs/photoBy-Averie_Woodard-unsplash-md1.webp";
    } else {
        starterImg.src = "imgs/photoBy-Averie_Woodard-unsplash-lg.webp";
    }
}
window.addEventListener("resize", updateStarterImgSrc);
window.addEventListener("DOMContentLoaded", updateStarterImgSrc);
/*LIGHTBOX*/
const galleryItem = document.getElementsByClassName("gallery-item"); //képeket tartalmazó div-ek osztálya, tömb
//creating elements for lightbox
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev", "controls");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next", "controls");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

const gallery = document.querySelector("#gallery");
gallery.insertAdjacentElement("afterend", lightBoxContainer);

let index = 1;
function showLightBox(n) {
    if (n > galleryItem.length) { // óvintézkedés
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }
    //divekKépekkel[].KÉPforrásLEKÉRDEZÉSE
    let imgSrc = galleryItem[index - 1].children[0].getAttribute("src");
    //kép nézegető src attribútum megadása
    lightBoxImg.setAttribute("src", imgSrc);
}

function currentImg() {
    lightBoxContainer.style.display = "block"; //lightbox megjelenítése elemek fölött

    let imageIndex = parseInt(this.getAttribute("data-index"));
    index = imageIndex;
    showLightBox(index = imageIndex);
}

for (let i = 0; i < galleryItem.length; i++) { //képek += eventListener
    galleryItem[i].setAttribute("data-index", i + 1);
    galleryItem[i].addEventListener("click", currentImg);
}

function sliderImage(n) {
    showLightBox(index += n);
}

function prevImg() {
    sliderImage(-1);
}
function nextImg() {
    sliderImage(1);
}

lightBoxPrev.addEventListener("click", prevImg);
lightBoxNext.addEventListener("click", nextImg);

//lightbox bezárása
function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}
lightBoxContainer.addEventListener("click", closeLightBox);

window.addEventListener("scroll", function () {
    if (lightBoxContainer.style.display === "block") {
        lightBoxContainer.style.display = "none";
    }
})
const logo = document.querySelector("#logoo");
const slogan = document.querySelector("#slogan");




/*adjusting elements when scroll*/
let isScrolling = false;

window.addEventListener("scroll", function () {
    if (!isScrolling) {
        window.requestAnimationFrame(function () {
            const galLabel = document.querySelector("#toggleButton");
            const stickTop = galLabel.getBoundingClientRect().top; //elem-ablak teteje közti távolság
            const nav = document.getElementById("mainNavbar");
            const scrollPos = document.documentElement.scrollTop; //legörgetett pixelek száma
            const slogan = document.querySelector("#slogan-container")

            const galleryContainer = document.querySelector("#toggleButton");
            const gallery = document.querySelector("#gallery");

            const navLinks = document.querySelector("#navLinksFr");

            logo.style.transform = `scale(${1 - scrollPos / 5000})`;

            if (stickTop <= 10) {
                galLabel.classList.add("galleryLabel-scrolled"); //add Hair artistry bg
                navLinks.classList.add("hide"); //hide: about, contact
                nav.classList.remove("scrolled"); //hide navbar bg
                if (gallery.classList.contains("show")) {
                    logo.classList.add("hide");// hide logoo
                    logo.classList.remove("show");
                }

            } else {
                logo.classList.add("show"); // show logoo
                logo.classList.remove("hide");
                galLabel.classList.remove("galleryLabel-scrolled");  // Hair artistry bg
                navLinks.classList.remove("hide");
                if (scrollPos > nav.offsetHeight / 2) {
                    nav.classList.add("scrolled");
                    slogan.classList.add("hide")

                } else {
                    nav.classList.remove("scrolled");
                    slogan.classList.remove("hide")
                }
            }

            isScrolling = false;
        });
    }
    isScrolling = true;
});
// Function to detect if an element is visible in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

/* // Function to add the 'slide-in' class when the element is in view
function handleScroll() {
    const section = document.getElementById('introduction');
    const section1 = document.getElementById('debi-container');

    if (isElementInViewport(section)) {
        section.classList.add('slide-in');
        section1.classList.add('slide-in');
    }
}
// Add scroll event listener
window.addEventListener('scroll', handleScroll); */