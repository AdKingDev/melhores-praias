# 🏖️ Melhores Praias do Brasil

Uma experiência visual em formato de **carrossel automático** que apresenta cinco das praias mais bem avaliadas do Brasil.

O projeto foi desenvolvido com **HTML, CSS e JavaScript** com o objetivo de praticar criação de sliders, manipulação do DOM, controle de índices e responsividade.

## 🔗 Demonstração

[Acessar o projeto](https://melhores-praias.vercel.app/)

## 🌊 Sobre o projeto

O **Melhores Praias do Brasil** apresenta um ranking com cinco destinos brasileiros através de um carrossel que avança automaticamente entre os slides.

A seleção utilizada no projeto foi baseada em uma pesquisa da **Booking.com**, divulgada pelo portal Melhores Destinos.

O ranking apresentado é:

1. **Praia do Sancho** — Fernando de Noronha, PE
2. **Praia de Jericoacoara** — Jijoca de Jericoacoara, CE
3. **Praia de Muro Alto** — Ipojuca, PE
4. **Praia do Pontal do Atalaia** — Arraial do Cabo, RJ
5. **Praia de Antunes** — Maragogi, AL

## 🎞️ Como funciona

As praias são organizadas horizontalmente dentro do carrossel.

O JavaScript mantém um índice que representa o slide atual e, a cada intervalo de tempo, avança para a próxima posição.

A movimentação é realizada através de:

```javascript
transform: translateX(...)
```

Quando o último slide é alcançado, o índice retorna para `0`, reiniciando a apresentação automaticamente.

## ✨ Funcionalidades

* Carrossel automático;
* Transições suaves entre os slides;
* Navegação contínua em loop;
* Identificação da posição de cada praia no ranking;
* Nome e localização de cada destino;
* Layout responsivo;
* Efeito visual ao passar o cursor sobre o carrossel.

## 📱 Responsividade

O layout se adapta a telas menores através de media queries.

Em dispositivos móveis, elementos como título, numeração do ranking e identificação das praias têm seus tamanhos ajustados para preservar a legibilidade e o espaço disponível.

## 🛠️ Tecnologias

* **HTML5** — estrutura e conteúdo;
* **CSS3** — layout, estilização, transições e responsividade;
* **JavaScript** — controle automático do carrossel;
* **Vercel** — deploy da aplicação.

## 🧠 Conceitos praticados

Durante o desenvolvimento deste projeto, foram aplicados conceitos como:

* Manipulação do DOM;
* `querySelector()`;
* `querySelectorAll()`;
* NodeLists e `.length`;
* Variáveis e índices;
* Funções;
* Estruturas condicionais;
* `setInterval()`;
* Template literals;
* `transform: translateX()`;
* Transições CSS;
* Flexbox;
* `overflow`;
* `object-fit`;
* Posicionamento absoluto;
* Pseudo-elementos;
* Media queries.

## 📚 Fonte do ranking

Ranking baseado em pesquisa realizada pela **Booking.com** e divulgada em matéria de **Cleverson Lima para o Melhores Destinos**, publicada em 2022.

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido por **Adriano Júnio**.
