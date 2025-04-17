const dataForm = document.getElementById("contact-form");

dataForm.addEventListener("submit", function(event){
    //impedir o envio

    event.preventDefault();

    //obter os campos
    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;

    //validação
  if(name && email && message){
    alert("Mensagem enviada!");

    dataForm.reset();

  }
})