window.onload = function () {
  //Campo para coletar o type do input
  const input_senha = document.querySelector("#input-senha");
  //Campo para coletar o evento onclick do botão
  const btn = document.querySelector("#eye");

  let eye_password = {
    text: (el) => {
      el.setAttribute("type", "password",);
    },
    password: (el) => {
      el.setAttribute("type", "text");
    },
  };

  btn.addEventListener("click", function () {
    eye_password[input_senha.type](input_senha);
  });


};