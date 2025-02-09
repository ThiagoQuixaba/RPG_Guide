const storedLogin = JSON.parse(sessionStorage.getItem('login'));

window.addEventListener('load', function() {
    if (storedLogin && !storedLogin.login) {
        window.location.href = '../index.html';
    }
});

let dataAtual = new Date();

function gerarCalendario() {
    const calendario = document.getElementById('calendario');
    const titulo = document.getElementById('titulo-calendario');
    calendario.innerHTML = ''; // Limpa o calendário

    const ano = dataAtual.getFullYear();
    const mes = dataAtual.getMonth();

    // Atualiza o título
    titulo.textContent = `${dataAtual.toLocaleString('pt-BR', { month: 'long' })} ${ano}`;

    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);

// Adiciona os dias da semana
    const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    diasDaSemana.forEach(dia => {
        const diaElemento = document.createElement('div');
        diaElemento.textContent = dia;
        diaElemento.classList.add('dia-semana'); // Adiciona a nova classe
        calendario.appendChild(diaElemento);
    });


    // Adiciona espaços vazios para os dias antes do primeiro dia do mês
    for (let i = 0; i < primeiroDia.getDay(); i++) {
        const diaElemento = document.createElement('div');
        calendario.appendChild(diaElemento);
    }

    // Adiciona os dias do mês
    for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {
        const diaElemento = document.createElement('div');
        diaElemento.textContent = dia;
        diaElemento.classList.add('dia');
        diaElemento.onclick = () => marcarEvento(diaElemento);
        calendario.appendChild(diaElemento);
    }
}

function marcarEvento(diaElemento) {
    diaElemento.classList.toggle('evento');
}

document.getElementById('btn-anterior').onclick = () => {
    dataAtual.setMonth(dataAtual.getMonth() - 1);
    gerarCalendario();
};

document.getElementById('btn-proximo').onclick = () => {
    dataAtual.setMonth(dataAtual.getMonth() + 1);
    gerarCalendario();
};

gerarCalendario();
