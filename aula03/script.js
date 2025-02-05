const cadastro = document.querySelector(".cadastro")
const mensagem = document.querySelector(".mensagem") 

cadastro.addEventListener("click", (event) =>{
    event.preventDefault();

    const email = document.querySelector(".email").value 

    if (email === ""){
        mensagem.textContent = "Digite o seu email!"
        document.body.style.backgroundColor = "white"
        return
    }
})