document.addEventListener('scroll', () =>{
  const nav = document.querySelector('nav')

  if (window.scrollY > 100) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
})

function validateForm(){
  let name = document.forms['contactForm']['name'].value;
  let email = document.forms['contactForm']['email'].value;
  let message = document.forms['contactForm']['message'].value;

  if (name == '' || hasNumber(name)){
    alert('Debes ingresar un nombre y debe contener solo letras');
    return false;
  } else if (email == ''){
    alert('Debes ingresar un correo electrónico');
    return false;
  } else if (!(email.includes('@'))){
    alert('Debes ingresar un email válido');
    return false;
  } else if (message == ''){
    alert('Debes ingresar un mensaje');
    return false;
  }
}

function hasNumber(myString){
  return  /\d/.test(myString);
}