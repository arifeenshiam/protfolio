window.addEventListener('load',()=>{
  document.querySelector('.loader').style.display='none';
});

const toggle=document.getElementById('themeToggle');

toggle.addEventListener('click',()=>{
  document.body.classList.toggle('light');
});
