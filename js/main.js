document.addEventListener( 'DOMContentLoaded', function() {
  var clickSubmit = document.querySelector('.submit')
  var selectInputUser = document.getElementById('user');
  var selectInputPass = document.getElementById('pass');
  var signIn = document.querySelector(".signin");
  var modal = document.querySelector('.modal')
  var clickClose = document.querySelector(".close");



  signIn.addEventListener('click', function(){
    modal.style.display = 'block';

  })

  clickClose.addEventListener('click', function(){
      modal.style.display = 'none';
  })


  clickSubmit.addEventListener('click', function(){
    if (selectInputUser.value === ""){
      selectInputUser.classList.add("error")
    }
    if (selectInputPass.value === ""){
      selectInputPass.classList.add("error")
    }
  })

  selectInputUser.addEventListener('mouseenter', function(e){
    e.target.classList.remove("error");
  })
  selectInputPass.addEventListener('mouseenter', function(e){
    e.target.classList.remove("error");
  })

  modal.addEventListener('click', function(){
    modal.style.display= "none";
  })






})
