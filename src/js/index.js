const personagens = document.querySelectorAll('.personagem') //constante que seleciona todos os itens com caracteristicas comuns
personagens.forEach((personagem) => {
  //aplica as mudanças em todos os personagens da lista
  personagem.addEventListener('mouseenter', () => {
    //apenas quando o mouse estiver sobre

    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado'); //pega o personagem que está previamente selecionado e remove essa classificação dele

    personagem.classList.add('selecionado'); //adiciona a classificação de selecionado para qual o mouse está sobre

    const idSelecionado = personagem.attributes.id.value;

    const imagemJogador1 = document.getElementById("personagem-jogador-1");
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`; //usa a crase pq as aspas não serviriam para este caso

    const nomeJogador1 = document.getElementById('nome-jogador-1');
    const nomeSelecionado =  personagem.getAttribute('data-name');
    nomeJogador1.innerHTML = nomeSelecionado;
  })
})
