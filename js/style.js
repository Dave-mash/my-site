// sticky navigation bar

window.onscroll = function () {
    scrollFunc()
    navScroll()
};

const navBar = document.querySelector('.main_nav_bar');
let sticky = navBar.offsetTop + 65;
console.log(navBar.offsetTop);

function scrollFunc() {
    if (window.pageYOffset >= sticky) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
}

// highlight active & scroll

let navs = document.querySelectorAll('.nav_hover');
let aboutPage = document.querySelector('.about_container');
let workPage = document.querySelector('.projects_container');
let contactPage = document.querySelector('.contact_container');
let homePage = document.querySelector('.home_container');

function helper(nav) {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    nav.firstElementChild.className += " active";
}

function navScroll() {
    for (var i = 0; i < navs.length; i++) {
    
        if (window.pageYOffset >= aboutPage.offsetTop && window.pageYOffset < workPage.offsetTop && navs[i].firstElementChild.id === 'about') {
            helper(navs[i]);
        } else if (window.pageYOffset < aboutPage.offsetTop - 100 && navs[i].firstElementChild.id === 'home') {
            helper(navs[i]);
        } else if (window.pageYOffset >= workPage.offsetTop - 100 && window.pageYOffset < contactPage.offsetTop && navs[i].firstElementChild.id === 'work') {
            helper(navs[i]);
        } else if (window.pageYOffset >= contactPage.offsetTop - 100 && navs[i].firstElementChild.id === 'contact') {
            helper(navs[i]);
        }
        
        navs[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
    
            current[0].className = current[0].className.replace(" active", "");
            this.firstElementChild.className += " active";
            
            if (this.firstElementChild.id === 'home') {
                window.scrollTo(0, homePage.offsetTop);
            } else if (this.firstElementChild.id === 'about') {
                window.scrollTo(0, aboutPage.offsetTop);
            } else if (this.firstElementChild.id === 'work') {
                window.scrollTo(0, workPage.offsetTop);
            } else if (this.firstElementChild.id === 'contact') {
                window.scrollTo(0, contactPage.offsetTop);
            }
        });
    }
}
 