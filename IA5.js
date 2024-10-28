const gameGrid = document.querySelector('.game-grid');

// Array com os dados dos jogos
const jogos = [
    { nome: 'Pac-Man', imagem: 'pica.png' },
    { nome: 'Mario Bros', imagem: 'snoopy.png' },
    { nome: 'Pitfall', imagem: 'sonic.jpeg' },
    { nome: 'Enduro', imagem: 'morris.webp' },
    { nome: 'Donkey Kong', imagem: 'morris.png },
    { nome: 'Galaxy', imagem: 'Mario2.jpg' },
    { nome: 'Tennis', imagem: 'Modelo 2.png' },  
    // ... outros jogos
];



// Função para criar um elemento da grade
function criarGameBox(jogo) {
    // ... código para criar cada div com a imagem e o nome do jogo
}

// Preenchendo a grade
jogos.forEach(jogo => {gameGrid.appendChild(criarGameBox(jogo));
});
