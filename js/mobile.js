// test
function myFunction() {
    alert("Hello! I am an alert box!");
}
// primary navigation

// Toggle mobile menu
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "";
    }
}

toggle.addEventListener('click', toggleMenu, false);

// submenus
const items = document.querySelectorAll('.item');

function toggleItem() {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    } else {
        this.classList.add("submenu-active");
    }
}

for (let item of items) {
    if (item.querySelector('.submenu')) {
        item.addEventListener('click', toggleItem, false);
        item.addEventListener('keypress', toggleItem, false);
    }
}

//above code not working
// from: https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-navigation-bar-with-flexbox--cms-33535
// made it to 20 min mark.  need to trouble shoot code and finsih video to complete nav


// CSS styles to go with above js
nav {
    font-family: Lato, sans-serif; 
    font-size: 1.25rem; /* 20px */
    background-color: var(--mainBackground);
    padding: 0 1rem;
}

.nav a {
    /* color: var(--mainFontColor) */
    color: coral;  /* test colour */
    text-decoration: none;
}

.menu, 
.submenu {
    list-style-type: none;
}

.item {
    padding: 1rem;
}

/* ? can I streamline this code?  */
/* setting rollover colours */
.item:not(.button) a:hover,
.item a:hover::after {
    color: var(--mainLogoBlue);
}

.menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.menu li a {
    display: block;
    padding: 2rem 1rem;
}

.menu li.subitem a {
    padding: 2rem;
}

/* creating mobile menu */

.toggle {
    order:1;
    font-size: .063rem; /* 17px */ 
}

/* don't currently need this as no buttons on primary nav bar
nb: can use for utility nav */
.item.button {
    order:2;
}

/* sets nav items width to 100%.  great for mobile, will query for tablet & desktop */
.item {
    order:3;
    width: 100%;
    text-align: center;
    display: none; 
}

.active .item {
    display: block;
}

/* don't need this now as not using buttons in this menu
this line separates links from buttons on mobile nave
.button.secondary {
    border-bottom: 1px var(--mainLogoBlue) solid;
} */

/* submenus */
.submenu {
    /* display: none; */
}
 /* will use javascript to hide/show submenu */
.submenu-active .submenu {
    display: block;
}

.has-submenu > a::after {
    font-family: Lato, sans-serif;
    font-size: 1.063rem; /* 17px */
    line-height: 2rem;
    font-weight: 900;
    content: "\2193";  /* change to down chevron */
    color: var(--mainLogoBlue);
    padding-left: 1rem;
}

.subitem a {
    padding: 1rem 2rem;
}

.submenu-active {
    background-color: var(--mainLightBgColour);
    border-radius: 1rem;
}