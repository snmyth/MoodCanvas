function toggleText() {
    const button = document.querySelector('.menu-toggle');
    button.textContent = button.textContent === 'MENU' ? 'CLOSE' : 'MENU';
    const menu = document.querySelector('.menu');
    const content = document.querySelector('.content');
    content.classList.toggle('open');
    menu.classList.toggle('open');
  }


function getToNextPage(){
 const button = document.querySelector('.start');

 
 button.classList.toggle('open');

     setTimeout(() => {
     window.location.href = "login.html";
     }, 900);
  

}


window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.logd').style.opacity = 1;
  }, 200); // 1000ms = 1 second delay
});

