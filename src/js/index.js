const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
    
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")
    
    body.classList.toggle("modo-escuro"); //alternativa para linhas 1 e 2

    if (modoEscuroEstaAtivo) {
        //body.classList.remove("modo-escuro"); <- linha 1
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        //body.classList.add("modo-escuro"); <- linha 2
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});

