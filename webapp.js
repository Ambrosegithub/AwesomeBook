const navHeader = document.querySelector('#navlink-header');
const navcont = document.createElement('div');
const navbar = document.createElement('nav');
navbar.id = 'navbar';
const navspan = document.createElement('span');
navspan.innerText ='awesome books'
const navlist = document.createElement('ul');
navlist.id= 'navlist';
const navlistitem = document.createElement('li');
const navlistLinks = document.createElement('a');
navHeader.appendChild(navcont);
navcont.appendChild(navbar);
navbar.append(navspan, navlist);
navlist.append(navlistitem);
navlistitem.append(navlistLinks);
navlistitem.innerHTML = `<a href="#" class="link">list of books</a>`
navlistitem.innerHTML += `<a href="#" class="link">add books</a>`;
navlistitem.innerHTML += `<a href="#" class="link">contact info</a>`;
navlistLinks.setAttribute(href);
/*
const navlist = document.createElement('div');
const navlist = document.createElement('h3');
const navlist = document.createElement('p');
const navlist = document.createElement('ul');
const navlist = document.createElement('li');
*/
