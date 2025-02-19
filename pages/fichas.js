const storedLogin = JSON.parse(sessionStorage.getItem('login'));

window.addEventListener('load', function() {
    if (storedLogin && !storedLogin.login) {
        window.location.href = '../index.html';
    } else {
        buscarFichas();
    }
});

async function buscarFichas() {
    try {
        const response = await fetch(`/tokens?owner=${storedLogin.user.id}`);
        if (!response.ok) {
            throw new Error('Erro na resposta da rede');
        }
        const fichas = await response.json();
        exibirFichas(fichas);
    } catch (error) {
        console.error('Erro ao buscar fichas:', error);
    }
}

function exibirFichas(fichas) {
    const container = document.getElementById('fichas-container');
    container.innerHTML = ''; // Limpa o conteúdo anterior

    fichas.forEach(ficha => {
        const card = document.createElement('div');
        card.classList.add('card');

        const titulo = document.createElement('div');
        titulo.classList.add('titulo');
        titulo.textContent = `${ficha.name} - ${ficha.level}`;

        // Criação do container2
        const container2 = document.createElement('div');
        container2.classList.add('container2');

        // Criação do container de atributos
        const atributosContainer = document.createElement('div');
        atributosContainer.classList.add('atributos');

        const subAtributos = document.createElement('div');
        subAtributos.classList.add('subtitulo3');
        subAtributos.innerHTML = `<b>ATRIBUTOS:</b>`;

        const atributos = document.createElement('div');
        atributos.classList.add('descricao3');
        atributos.innerHTML = `
            <b>Vida:</b> ${ficha.vida} <br>
            <b>Sanidade:</b> ${ficha.sanidade} <br>
            <b>Vigor:</b> ${ficha.vigor} <br>
            <b>Mana:</b> ${ficha.mana} <br>
            <b>Saciedade:</b> ${ficha.saciedade} <br>
            <b>Hidratacão:</b> ${ficha.hidratacao} <br>`;

        atributosContainer.appendChild(subAtributos);
        atributosContainer.appendChild(atributos);

        // Criação do container de status
        const statusContainer = document.createElement('div');
        statusContainer.classList.add('status');

        const subStatus = document.createElement('div');
        subStatus.classList.add('subtitulo3');
        subStatus.innerHTML = `<b>STATUS:</b>`;

        const status = document.createElement('div');
        status.classList.add('descricao3');
        status.innerHTML = `
            <b>Fisico:</b> ${ficha.fisico} <br>
            <b>Destreza:</b> ${ficha.destreza} <br>
            <b>Agilidade:</b> ${ficha.agilidade} <br>
            <b>Presença:</b> ${ficha.presenca} <br>
            <b>Magia:</b> ${ficha.magia} <br>
            <b>Magia:</b> ${ficha.magia} <br>`;

        const subAptidoes = document.createElement('p');
        subAptidoes.classList.add('subtitulo2');
        subAptidoes.innerHTML = `<b>APTIDÕES:</b>`;

        // Criação do container para as aptidões
        const aptidoesContainer = document.createElement('div');
        aptidoesContainer.classList.add('aptidoes-container');
        aptidoesContainer.style.display = 'flex'; // Adiciona o estilo flex

        // Primeira parte das aptidões
        const aptidoesParte1 = document.createElement('p');
        aptidoesParte1.classList.add('descricao');
        aptidoesParte1.innerHTML = `
            <b>Fortitude:</b> ${ficha.fortitude} <br>
            <b>Luta:</b> ${ficha.luta} <br>
            <b>Arremesso:</b> ${ficha.arremesso} <br>
            <b>Bloqueio:</b> ${ficha.bloqueio} <br>
            <b>Atletismo:</b> ${ficha.atletismo} <br>
            <b>Reflexo:</b> ${ficha.reflexo} <br>
            <b>Iniciativa:</b> ${ficha.iniciativa} <br>
            <b>Crime:</b> ${ficha.crime} <br>
            <b>Vontade:</b> ${ficha.vontade} <br>
            <b>Encanto:</b> ${ficha.encanto} <br>
            <b>Ocultismo:</b> ${ficha.ocultismo} <br>
            <b>Medicina:</b> ${ficha.medicina} <br>
        `;

        // Segunda parte das aptidões
        const aptidoesParte2 = document.createElement('p');
        aptidoesParte2.classList.add('descricao');
        aptidoesParte2.innerHTML = `
            <b>Artes:</b> ${ficha.artes} <br>
            <b>Adestramento:</b> ${ficha.adestramento} <br>
            <b>Diplomacia:</b> ${ficha.diplomacia} <br>
            <b>Investigação:</b> ${ficha.investigacao} <br>
            <b>Tática:</b> ${ficha.tatica} <br>
            <b>Religião:</b> ${ficha.religiao} <br>
            <b>Metalurgia:</b> ${ficha.metalurgia} <br>
            <b>Marcenaria:</b> ${ficha.marcenaria} <br>
            <b>Artesanato:</b> ${ficha.artesanato} <br>
            <b>Negociação:</b> ${ficha.negociacao} <br>
            <b>Tecnologia:</b> ${ficha.tecnologia} <br>
        `;

        // Adiciona as partes das aptidões ao container de aptidões
        aptidoesContainer.appendChild(aptidoesParte1);
        aptidoesContainer.appendChild(aptidoesParte2);

        statusContainer.appendChild(subStatus);
        statusContainer.appendChild(status);
        container2.appendChild(atributosContainer);
        container2.appendChild(statusContainer);
        card.appendChild(titulo);
        card.appendChild(container2);
        card.appendChild(subAptidoes);
        card.appendChild(aptidoesContainer); // Adiciona o novo container de aptidões
        container.appendChild(card);
    });
}
