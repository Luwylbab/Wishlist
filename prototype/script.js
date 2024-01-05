// Pages
const homePage = document.getElementById('home');
const myListsPage = document.getElementById('my-lists');
const newItemPage = document.getElementById('new-item');
const friendsPage = document.getElementById('friends');

// Buttons
const loginBtn = document.getElementById('login-btn');
const homeBtn = document.getElementById('home-btn');
const myListsBtn = document.getElementById('my-lists-btn');
const newItemBtn = document.getElementById('new-item-btn');
const friendsBtn = document.getElementById('friends-btn');
const loginSubmitBtn = document.getElementById('login-submit');

// Menus
const loginMenu = document.getElementById('login');

// Event Listeners
loginBtn.addEventListener('click', () => {
    loginMenu.style.display = 'flex';
})

loginSubmitBtn.addEventListener('click', () => {
    loginMenu.style.display = 'none';
})

homeBtn.addEventListener('click', () => {
    homePage.style.display = 'flex';
    myListsPage.style.display = 'none';
    newItemPage.style.display = 'none';
    friendsPage.style.display = 'none';
})

myListsBtn.addEventListener('click', () => {
    homePage.style.display = 'none';
    myListsPage.style.display = 'flex';
    newItemPage.style.display = 'none';
    friendsPage.style.display = 'none';
})

newItemBtn.addEventListener('click', () => {
    homePage.style.display = 'none';
    myListsPage.style.display = 'none';
    newItemPage.style.display = 'flex';
    friendsPage.style.display = 'none';
})

friendsBtn.addEventListener('click', () => {
    homePage.style.display = 'none';
    myListsPage.style.display = 'none';
    newItemPage.style.display = 'none';
    friendsPage.style.display = 'flex';
})