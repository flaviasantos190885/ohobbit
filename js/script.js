document.addEventListener('DOMContentLoaded', function () {
  // Seleção dos elementos
  const divg = document.querySelector(".gandalf");
  const divb = document.querySelector(".bilbo");
  const divt = document.querySelector(".tauriel");
  const divl = document.querySelector(".legolas");
  const divth = document.querySelector(".thorin");
  const divsmau = document.querySelector(".smaug");
  const divsme = document.querySelector(".smeagol");
  const divazo = document.querySelector(".azog");
  const divsau = document.querySelector(".sauron");

  const buttons = {
    btgandalf: document.querySelector("#btgandalf"),
    btbilbo: document.querySelector("#btbilbo"),
    bttauriel: document.querySelector("#bttauriel"),
    btlegolas: document.querySelector("#btlegolas"),
    btthorin: document.querySelector("#btthorin"),
    btsmaug: document.querySelector("#btsmaug"),
    btsmeagol: document.querySelector("#btsmeagol"),
    btazog: document.querySelector("#btazog"),
    btsauron: document.querySelector("#btsauron"),
  };

  const button = document.querySelector('button');
  const popup = document.querySelector('.popup-wrapper');

  // Função para filtrar personagem
  function filtraPersonagem(divQueVaiAparecer) {
    const divs = [divg, divb, divt, divl, divth, divsmau, divsme, divazo, divsau];
    divs.forEach(div => div.classList.add("hide"));

    divQueVaiAparecer.classList.remove("hide");
  }

  // Adiciona listeners aos botões
  Object.values(buttons).forEach((btn) => {
    if (btn) {
      btn.addEventListener("click", function () {
        const personagemKey = btn.id.slice(2); // Remove "bt" do ID
        const divPersonagem = document.querySelector(`.${personagemKey}`);
        filtraPersonagem(divPersonagem);
      });
    }
  });

  // Adiciona listener ao botão de abrir o modal
  button.addEventListener('click', function () {
    popup.style.display = 'block';
  });

  // Adiciona listener para fechar o modal ao clicar fora dele
  popup.addEventListener('click', function (event) {
    const classNames = ['popup-close', 'popup-wrapper', 'popup-link'];
    const classNameOfClickedElement = event.target.classList[0];
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement);

    if (shouldClosePopup) {
      popup.style.display = 'none';
    }
  });

   // Enviar formulário 
   const enviar = document.getElementById("enviar");
   const inputMsg = document.getElementById("txtarea");
   const inputNome = document.getElementById("nome"); 
   const inputEmail = document.getElementById("email"); 
   
   enviar.addEventListener('click', function (event) {
       event.preventDefault();
   
       // Verificar se os campos estão preenchidos
       if (inputNome.value.trim() === '' || inputEmail.value.trim() === '' || inputMsg.value.trim() === '') {
           alert("Por favor, preencha todos os campos!");
       } else {
           alert("Formulário enviado!");
           popup.style.display = 'none';

           inputNome.value = '';
           inputEmail.value = '';
           inputMsg.value = '';
       }
   });
   
});
