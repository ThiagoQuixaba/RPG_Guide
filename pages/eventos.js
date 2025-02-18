const storedLogin = JSON.parse(sessionStorage.getItem('login'));
const popup = document.getElementById('popup');

function capitalizeText(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function mostrarPopup(evento, x, y) {
    const name = capitalizeText(evento.name);
    const description = capitalizeText(evento.description);
    popup.innerHTML = `<h2>${name} - ${evento.hour}:${evento.minute}</h2><h3>${description}</h3>`;
    popup.style.display = 'block';
    popup.style.left = `${x}px`; 
    popup.style.top = `${y}px`; 
}

function esconderPopup() {
    popup.style.display = 'none'; 
}

window.addEventListener('load', function() {
    // Redireciona se não houver login
    if (storedLogin && !storedLogin.login) {
        window.location.href = '../index.html';
    }
});

let dataAtual = new Date();
let eventos = []; 

async function buscarEventos() {
    try {
        const response = await fetch('/events'); 
        if (!response.ok) {
            throw new Error('Erro na resposta da rede');
        }
        eventos = await response.json(); 
    } catch (error) {
        console.error('Erro ao buscar eventos:', error);
    }
}

function marcarEventos(diaElemento, dia) {
    const evento = eventos.find(event => 
        event.day === dia && 
        event.month === (dataAtual.getMonth() + 1) && 
        event.year === dataAtual.getFullYear()
    );

    if (evento) {
        diaElemento.classList.add('evento'); 
        diaElemento.onmouseenter = (e) => mostrarPopup(evento, e.pageX, e.pageY);
        diaElemento.onmouseleave = esconderPopup; 
    }
}

function gerarCalendario() {
    const calendario = document.getElementById('calendario');
    const titulo = document.getElementById('titulo-calendario');
    calendario.innerHTML = ''; 

    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth();

    titulo.textContent = `${capitalizeText(dataAtual.toLocaleString('pt-BR', { month: 'long' }))} ${ano}`;

    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);

    const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    diasDaSemana.forEach(dia => {
        const diaElemento = document.createElement('div');
        diaElemento.textContent = dia;
        diaElemento.classList.add('dia-semana');
        calendario.appendChild(diaElemento);
    });

    for (let i = 0; i < primeiroDia.getDay(); i++) {
        const diaElemento = document.createElement('div');
        calendario.appendChild(diaElemento);
    }

    for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {
        const diaElemento = document.createElement('div');
        diaElemento.textContent = dia;
        diaElemento.classList.add('dia');
        diaElemento.onclick = () => marcarEventos(diaElemento, dia); 
        marcarEventos(diaElemento, dia); 
        calendario.appendChild(diaElemento);
    }
}

document.getElementById('btn-anterior').onclick = () => {
    dataAtual.setMonth(dataAtual.getMonth() - 1);
    gerarCalendario();
};

document.getElementById('btn-proximo').onclick = () => {
    dataAtual.setMonth(dataAtual.getMonth() + 1);
    gerarCalendario();
};

async function init() {
    await buscarEventos(); 
    gerarCalendario(); 
}

init();