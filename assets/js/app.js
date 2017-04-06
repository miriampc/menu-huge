window.addEventListener('load',function(){
  var btnmenu=document.getElementById('btnmenu');
  var btnclose=document.getElementById('btnclose');
  var classbtn=document.getElementsByClassName('icon');
  var navOptions=document.getElementsByClassName('menu-options');
  btnmenu.onclick=function(){
    classbtn[0].style.display="none";
    navOptions[0].classList.add("show");
    classbtn[1].classList.add('show');
  }
  btnclose.onclick=function(){
    classbtn[0].style.display="block";
    navOptions[0].classList.remove('show');
    classbtn[1].classList.remove('show');
  }
});

function show(){

}
