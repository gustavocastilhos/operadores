// FRASES

const frases = [

  "☕ Café + JavaScript = produtividade",
  "🐛 Todo bug vira tutorial depois.",
  "🚀 Console.log salva vidas."

];

function mostrarFrase() {

  const frase =
    frases[Math.floor(Math.random() * frases.length)];

  console.log(frase);
}

mostrarFrase();

// ==========================================
// EFEITO DIGITAÇÃO
// ==========================================

const titulo =
  document.querySelector(".hero-content h1");

const texto = "⚡ JS OPERATORS";

let index = 0;

titulo.innerHTML = "";

function digitar() {

  if(index < texto.length) {

    titulo.innerHTML += texto.charAt(index);

    index++;

    setTimeout(digitar, 100);
  }
}

digitar();

// ==========================================
// QUIZ NOVO
// ==========================================

const perguntas = [

  {
    pergunta: "Quanto é 5 + 5?",
    respostas: ["10", "15", "20"],
    correta: 0
  },

  {
    pergunta: "Qual operador significa E lógico?",
    respostas: ["&&", "||", "!"],
    correta: 0
  },

  {
    pergunta: "Qual operador compara valor e tipo?",
    respostas: ["==", "===", "="],
    correta: 1
  }

];

let atual = 0;
let pontos = 0;

const pergunta =
  document.getElementById("quiz-question");

const botoes =
  document.getElementById("quiz-buttons");

const resultado =
  document.getElementById("quiz-result");

const barra =
  document.getElementById("progress-bar");

function carregarPergunta() {

  const q = perguntas[atual];

  pergunta.innerHTML =
    q.pergunta;

  botoes.innerHTML = "";

  q.respostas.forEach((resposta, index) => {

    const button =
      document.createElement("button");

    button.innerText = resposta;

    button.onclick = () =>
      responder(index);

    botoes.appendChild(button);

  });

  atualizarBarra();
}

function responder(index) {

  const q = perguntas[atual];

  if(index === q.correta) {

    pontos++;

    resultado.innerHTML =
      "✅ Acertou!";

  } else {

    resultado.innerHTML =
      "❌ Errou!";
  }

  atual++;

  setTimeout(() => {

    resultado.innerHTML = "";

    if(atual < perguntas.length) {

      carregarPergunta();

    } else {

      finalizarQuiz();

    }

  }, 1000);
}

function atualizarBarra() {

  const progresso =
    (atual / perguntas.length) * 100;

  barra.style.width =
    `${progresso}%`;
}

function finalizarQuiz() {

  pergunta.innerHTML =
    "🏆 Quiz Finalizado!";

  botoes.innerHTML = "";

  barra.style.width = "100%";

  resultado.innerHTML =
    `Você acertou ${pontos}
    de ${perguntas.length}`;
}

carregarPergunta();

// ==========================================
// QUIZ DESAFIO
// ==========================================

const desafioPerguntas = [

  {
    pergunta:
      "Qual resultado de typeof null ?",

    respostas: [
      "null",
      "object",
      "undefined",
      "boolean"
    ],

    correta: 1
  },

  {
    pergunta:
      "Qual operador retorna resto da divisão?",

    respostas: [
      "/",
      "*",
      "%",
      "+"
    ],

    correta: 2
  },

  {
    pergunta:
      "Qual resultado de 2 === '2' ?",

    respostas: [
      "true",
      "false",
      "undefined"
    ],

    correta: 1
  },

  {
    pergunta:
      "Qual operador significa OU lógico?",

    respostas: [
      "&&",
      "||",
      "!"
    ],

    correta: 1
  }

];

let desafioAtual = 0;
let desafioPontos = 0;

const desafioQuestion =
  document.getElementById("desafio-question");

const desafioButtons =
  document.getElementById("desafio-buttons");

const desafioResult =
  document.getElementById("desafio-result");

const desafioBar =
  document.getElementById("desafio-progress");

// ==========================================

function carregarDesafio() {

  const q =
    desafioPerguntas[desafioAtual];

  desafioQuestion.innerHTML =
    q.pergunta;

  desafioButtons.innerHTML = "";

  q.respostas.forEach((resposta, index) => {

    const button =
      document.createElement("button");

    button.innerText = resposta;

    button.onclick = () =>
      responderDesafio(index);

    desafioButtons.appendChild(button);

  });

  atualizarBarraDesafio();
}

// ==========================================

function responderDesafio(index) {

  const q =
    desafioPerguntas[desafioAtual];

  if(index === q.correta) {

    desafioPontos++;

    desafioResult.innerHTML =
      "🔥 Boa!";

    desafioResult.style.color =
      "#4ade80";

  } else {

    desafioResult.innerHTML =
      "💀 Errou!";

    desafioResult.style.color =
      "#f87171";
  }

  desafioAtual++;

  setTimeout(() => {

    desafioResult.innerHTML = "";

    if(desafioAtual <
      desafioPerguntas.length) {

      carregarDesafio();

    } else {

      finalizarDesafio();
    }

  }, 1200);
}

// ==========================================

function atualizarBarraDesafio() {

  const progresso =
    (desafioAtual /
    desafioPerguntas.length) * 100;

  desafioBar.style.width =
    `${progresso}%`;
}

// ==========================================

function finalizarDesafio() {

  desafioQuestion.innerHTML =
    "🏆 Desafio Finalizado!";

  desafioButtons.innerHTML = "";

  desafioBar.style.width = "100%";

  let frase = "";

  if(desafioPontos ===
    desafioPerguntas.length) {

    frase =
      "🔥 Você é praticamente um ninja JavaScript.";

  } else if(desafioPontos >= 2) {

    frase =
      "😎 Mandou bem no desafio.";

  } else {

    frase =
      "😂 O JavaScript venceu dessa vez.";
  }

  desafioResult.innerHTML = `

    Você acertou
    ${desafioPontos}
    de
    ${desafioPerguntas.length}

    <br><br>

    ${frase}

    <br><br>

    <button
      class="restart-btn"
      onclick="reiniciarDesafio()">

      Jogar novamente 🔄

    </button>
  `;
}

// ==========================================

function reiniciarDesafio() {

  desafioAtual = 0;

  desafioPontos = 0;

  desafioResult.innerHTML = "";

  carregarDesafio();
}

// ==========================================

carregarDesafio();
// ==========================================
// ABA TERNÁRIO
// ==========================================

function toggleTernario() {

  const info =
    document.getElementById("ternario-info");

  if(info.style.display === "block") {

    info.style.display = "none";

  } else {

    info.style.display = "block";
  }
}