const imgs = document.querySelector('#img ul'); // Seleciona o elemento que contém as imagens do carrossel
const img = document.querySelectorAll('#img img');

let idx = 0;

function carrossel() {
    idx++; // Incrementa o índice para mostrar a próxima imagem

    if (idx > img.length - 1) { // Se o índice for maior que o número de imagens, volta para a primeira imagem
        idx = 0; // Volta pra primeira imagem
    }

    imgs.style.transform = `translateX(${-idx * 100}%)`; // Move o carrossel para a esquerda, mostrando a próxima imagem
}

setInterval(carrossel, 2000); // Chama a função carrossel a cada 1000 milissegundos (1 segundo)