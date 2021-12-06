const btn_login = document.getElementById("btn_login");
const btn_sign = document.getElementById("btn_sign");
const eliminar = document.querySelector(".section_card");

btn_login.addEventListener("click", () => {
  eliminar.remove();
  loginBtn();
});

btn_sign.addEventListener("click", () => {
  eliminar.remove();
  signBtn();
});

// Funcion Iniciar Sesion
function loginBtn() {
  // Div contenedor
  const card_login = document.createElement("div");
  card_login.classList.add("card_login");

  /* *********************************************************************************** */
  // Create element Texto
  const card_text = document.createElement("div");
  const card_text_h2 = document.createElement("h2");

  // Texto
  card_login.append(card_text);
  card_text.classList.add("login_text");
  card_text.append(card_text_h2);
  card_text_h2.innerText = "Inicia Sesion";

  /* ********************************************************************************** */
  // Form
  const card_input = document.createElement("form");
  card_login.append(card_input);
  card_input.classList.add("login_input");
  card_input.setAttribute("id", "formulario");

  /* *********************************************************************************** */
  // Create element Usuario
  const card_input_usuario = document.createElement("div");
  const card_input_usuario_label = document.createElement("label");
  const card_input_usuario_input = document.createElement("input");

  // Usuario
  card_input.append(card_input_usuario);
  card_input_usuario.classList.add("login_input_control");

  // Label Usuario
  card_input_usuario.append(card_input_usuario_label);
  card_input_usuario_label.setAttribute("for", "usuario");
  card_input_usuario_label.innerText = "Ingrese su nombre de usuario";

  // Input Usuario
  card_input_usuario.append(card_input_usuario_input);
  card_input_usuario_input.setAttribute("placeholder", "Gean1997");
  card_input_usuario_input.setAttribute("type", "text");
  card_input_usuario_input.setAttribute("name", "usuario");
  card_input_usuario_input.setAttribute("id", "usuario_login");

  /* ******************************************************************************* */
  // Create element Contraseña
  const card_input_contraseña = document.createElement("div");
  const card_input_contraseña_label = document.createElement("label");
  const card_input_contraseña_input = document.createElement("input");

  // Contraseña
  card_input.append(card_input_contraseña);
  card_input_contraseña.classList.add("login_input_control");

  // Label Contraseña
  card_input_contraseña.append(card_input_contraseña_label);
  card_input_contraseña_label.setAttribute("for", "contraseña");
  card_input_contraseña_label.innerText = "Ingrese su nombre de usuario";

  // input Contraseña
  card_input_contraseña.append(card_input_contraseña_input);
  card_input_contraseña_input.setAttribute("placeholder", "*********");
  card_input_contraseña_input.setAttribute("type", "password");
  card_input_contraseña_input.setAttribute("name", "contraseña");
  card_input_contraseña_input.setAttribute("id", "contraseña_login");

  /* *************************************************************** */
  // Boton
  const button = document.createElement("button");

  card_input.append(button);
  button.setAttribute("id", "btn");
  /* button.setAttribute('disabled', true) */
  button.innerText = " Iniciar Sesion";
  button.classList.add("login_btn");

  // Boton Register
  const button_register = document.createElement('button')

  card_input.append(button_register);
  button_register.classList.add("login_btn");
  button_register.innerText = " Registrarme";
  document.body.prepend(card_login);

  /* ************************************************************************** */
  // Submit
  const user_login = document.getElementById("usuario_login");
  const pass_login = document.getElementById("contraseña_login");
  const formulario = document.getElementById("formulario");
  const storageName = localStorage.getItem("user");
  const storagePass = localStorage.getItem("pass");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (user_login.value == storageName && pass_login.value == storagePass) {
        set_correct(`Bienvenido ${user_login.value}`)
        card_login.remove();

    } else {
        set_error(`El Usuario/Contraseña es Incorrecta`)
        card_login.remove();
    }
    formulario.reset();
  });
  // Button Register
  button_register.addEventListener('click', (e)=>{
    e.preventDefault()
    card_login.remove()
    signBtn()
  })
 
}
// Funcion Registrar Usuario
function signBtn() {
  // Create Div Contenedor
  const card_register = document.createElement("div");
  card_register.classList.add("card_register");
  /*************************************************************************************/
  // Create Elements Text
  const card_text = document.createElement("div");
  const card_text_h2 = document.createElement("h2");

  card_register.append(card_text);
  card_text.classList.add("register_text");
  card_text.append(card_text_h2);
  card_text_h2.innerText = " Registrate Ahora";

  // Div Inputs

  /* ********************************************************************************** */
  // Create Elements Form
  const card_form = document.createElement("form");
  card_register.append(card_form);
  card_form.classList.add("register_input");
  card_form.setAttribute("id", "formulario");

  /* ********************************************************************************* */
  // Create Elements Usuario
  const usuario = document.createElement("div");
  const usuario_label = document.createElement("label");
  const usuario_input = document.createElement("input");

  // Box Usuario
  card_form.append(usuario);
  usuario.classList.add("register_input_control");

  // Usuario Label
  usuario.append(usuario_label);
  usuario_label.setAttribute("for", usuario);
  usuario_label.innerText = "Ingrese su nombre de usuario";

  // Usuario Input
  usuario.append(usuario_input);
  usuario_input.setAttribute("type", "text");
  usuario_input.setAttribute("id", "usuario");
  usuario_input.setAttribute("name", "usuario");
  usuario_input.setAttribute("placeholder", "Gean1997");

  /* ******************************************************************************* */
  // Create Elements Email
  const email = document.createElement("div");
  const email_label = document.createElement("label");
  const email_input = document.createElement("input");

  // Box Email
  card_form.append(email);
  email.classList.add("register_input_control");

  // Email Label
  email.append(email_label);
  email_label.innerText = "Ingrese su Email";
  email_label.setAttribute("for", "email");

  // Email Input
  email.append(email_input);
  email_input.setAttribute("type", "text");
  email_input.setAttribute("id", "email");
  email_input.setAttribute("name", "email");
  email_input.setAttribute("placeholder", "ejemplo@gmail.com");

  /* ***************************************************************************** */
  // Create Elements Telefono
  const telefono = document.createElement("div");
  const telefono_label = document.createElement("label");
  const telefono_input = document.createElement("input");

  // Box Telefono
  card_form.append(telefono);
  telefono.classList.add("register_input_control");

  // Telefono Label
  telefono.append(telefono_label);
  telefono_label.innerText = "Ingrese su numero de telefono";
  telefono_label.setAttribute("for", "telefono");

  // Telefono Input
  telefono.append(telefono_input);
  telefono_input.setAttribute("type", "text");
  telefono_input.setAttribute("id", "telefono");
  telefono_input.setAttribute("name", "telefono");
  telefono_input.setAttribute("placeholder", "3825378321");

  /* ******************************************************************************* */
  // Create Elements Contraseña
  const contraseña = document.createElement("div");
  const contraseña_label = document.createElement("label");
  const contraseña_input = document.createElement("input");

  // Box Contraseña
  card_form.append(contraseña);
  contraseña.classList.add("register_input_control");

  // Contraseña Label
  contraseña.append(contraseña_label);
  contraseña_label.innerText = "Ingrese su contraseña";
  contraseña_label.setAttribute("for", "contraseña");

  // Contraseña Input
  contraseña.append(contraseña_input);
  contraseña_input.setAttribute("type", "password");
  contraseña_input.setAttribute("id", "contraseña");
  contraseña_input.setAttribute("name", "contraseña");
  contraseña_input.setAttribute("placeholder", "*****************");

  /* ************************************************************************** */
  // Create Elements Submit
  const submit = document.createElement("input");

  // Submit Input
  card_form.append(submit);
  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "register_submit");
  submit.setAttribute("class", "register_btn");
  submit.setAttribute("value", "Registrarme");
  document.body.prepend(card_register);

  // Submit
  const user = document.getElementById("usuario");
  const pass = document.getElementById("contraseña");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("user", user.value);
    localStorage.setItem("pass", pass.value);
    card_register.remove();
    loginBtn();
  });
}

function set_correct(msj){
    const correct = document.createElement('div')
    correct.setAttribute('id','correct')
    correct.classList.add('set_correct')

    const correct_h2 = document.createElement('h2')
    correct.append(correct_h2);
    correct_h2.innerText= `${msj}`;

    const correct_btn= document.createElement('button')
    correct.append(correct_btn)
    correct_btn.innerText= " Cerrar Sesion";

    document.body.prepend(correct)

    const eliminar_correct = document.getElementById('correct')

    correct_btn.addEventListener('click', (e)=>{
        e.preventDefault()
        eliminar_correct.remove()
        loginBtn()
        
    })

    
    

}
function set_error(msj){
    const error = document.createElement('div');
    error.classList.add('set_error');
    error.setAttribute('id','error');

    const error_h2 = document.createElement('h2');
    error.append(error_h2);
    error_h2.innerText= `${msj}`;
    
    const error_btn = document.createElement('button');
    error.append(error_btn);
    error_btn.innerText = "Volver"

    document.body.prepend(error)

    const eliminar = document.getElementById('error')
    error_btn.addEventListener('click',(e)=>{
        e.preventDefault()
        eliminar.remove()
        loginBtn()
    })
}

