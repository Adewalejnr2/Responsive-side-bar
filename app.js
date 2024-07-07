const openEl = document.querySelector('.open-btn');
const closeEl = document.querySelector('.close-btn');
const sideBarEl = document.querySelector('#sideBar');
const btnCon = document.querySelector('.btn-con');

openEl.addEventListener('click', function () {
  sideBarEl.classList.add('sideBarOpen');
  btnCon.classList.add('showSidebar');
});

closeEl.addEventListener('click', function () {
  sideBarEl.classList.remove('sideBarOpen');
  btnCon.classList.remove('showSidebar');
});
