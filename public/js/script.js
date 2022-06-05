//select menu (the burger menu):
const moarBorger = document.querySelector('.menu');

//select navbar (this is where the dropdown is gonna happen):
const menuDrop = document.querySelector('.navbar');

//write the handler to 'show'||'hide' (toggling between css styling 'open')
const openClose = function() { 
    menuDrop.classList.toggle('open');
};

//bind listener to icon, not items (link that bitch up to when you click the burger menu)
moarBorger.addEventListener('click', openClose);

// ________________________________________

const date = new Date();

const month = date.getMonth();



