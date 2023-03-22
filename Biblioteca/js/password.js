const togglePassword = document.querySelector('#toggle-password');
const password = document.querySelector('#logpass');
  
togglePassword.addEventListener('click', function (e) {
    // cambia el tipo de entrada de la contraseña
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
  
    // cambia el icono del botón
    this.querySelector('i').classList.toggle('uil-eye-slash');
    this.querySelector('i').classList.toggle('uil-eye');      
});

const togglePassword2 = document.querySelector('#toggle-password2');
const password2 = document.querySelector('#logpass2');
  
togglePassword2.addEventListener('click', function (e) {
    // cambia el tipo de entrada de la contraseña
    const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute('type', type);
  
    // cambia el icono del botón
    this.querySelector('i').classList.toggle('uil-eye-slash');
    this.querySelector('i').classList.toggle('uil-eye');      
});

