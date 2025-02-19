const sqlite3 = require('sqlite3').verbose();
const database = new sqlite3.Database('database.db');

database.serialize(() => {
    database.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE NOT NULL, password TEXT NOT NULL, admin TEXT NOT NULL);`);
    
    // database.run(`INSERT INTO users (username, password, admin) VALUES (?, ?, ?);`, ['Isabel', '25456266', 'false'], (err) => {
    //     if (err) {
    //         console.error('Erro ao inserir Isabel:', err.message);
    //     } else {
    //         console.log('Usuário Isabel inserido com sucesso!');
    //     }
    // });
    // database.run(`INSERT INTO users (username, password, admin) VALUES (?, ?, ?);`, ['Felas', '73', 'false'], (err) => {
    //     if (err) {
    //         console.error('Erro ao inserir Felas:', err.message);
    //     } else {
    //         console.log('Usuário Felas inserido com sucesso!');
    //     }
    // });
    database.run(`INSERT INTO users (username, password, admin) VALUES (?, ?, ?);`, ['Teste', 'testes', 'false'], (err) => {
        if (err) {
            console.error('Erro ao inserir Felas:', err.message);
        } else {
            console.log('Usuário teste inserido com sucesso!');
        }
    });
    console.log("Tabela de usuários criada e dados inseridos com sucesso!");



    database.run(`CREATE TABLE IF NOT EXISTS events (name TEXT UNIQUE PRIMARY KEY, day int, month int, year int, hour TEXT, minute TEXT, description TEXT);`);

    database.run(`INSERT INTO events (name, day, month, year, hour, minute, description) VALUES (?, ?, ?, ?, ?, ?, ?);`, ['Prova de Maila', 17, 2, 2025, '15', '10', 'Fazer a prova de Maila.'], (err) => {
        if (err) {
            console.error('Erro ao inserir evento:', err.message);
        } else {
            console.log('Evento inserido com sucesso!');
        }
    });
    console.log("Tabela de eventos criada e dados inseridos com sucesso!");
    database.run(`INSERT INTO events (name, day, month, year, hour, minute, description) VALUES (?, ?, ?, ?, ?, ?, ?);`, ['Pitch & Apresentação maila', 18, 2, 2025, '13', '00', 'Apresentar o pitch de empreendedorismo e o trabalho de Maila'], (err) => {
        if (err) {
            console.error('Erro ao inserir evento:', err.message);
        } else {
            console.log('Evento inserido com sucesso!');
        }
    });
    console.log("Tabela de eventos criada e dados inseridos com sucesso!");
    database.run(`INSERT INTO events (name, day, month, year, hour, minute, description) VALUES (?, ?, ?, ?, ?, ?, ?);`, ['Projeto de Julian', 19, 2, 2025, '14', '00', 'Apresentar o site do projeto de programação para web II'], (err) => {
        if (err) {
            console.error('Erro ao inserir evento:', err.message);
        } else {
            console.log('Evento inserido com sucesso!');
        }
    });
    console.log("Tabela de eventos criada e dados inseridos com sucesso!");
    database.run(`INSERT INTO events (name, day, month, year, hour, minute, description) VALUES (?, ?, ?, ?, ?, ?, ?);`, ['Projeto de Julian II', 20, 2, 2025, '14', '00', 'Apresentar o site do projeto de programação para web II'], (err) => {
        if (err) {
            console.error('Erro ao inserir evento:', err.message);
        } else {
            console.log('Evento inserido com sucesso!');
        }
    });
    console.log("Tabela de eventos criada e dados inseridos com sucesso!");

    database.run(`CREATE TABLE IF NOT EXISTS tokens (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        owner INTEGER, 
        name TEXT, 
        raca TEXT, 
        class TEXT, 
        profession TEXT, 
        level INTEGER, 
        vida INTEGER, 
        vigor INTEGER, 
        mana INTEGER, 
        sanidade INTEGER, 
        saciedade INTEGER, 
        hidratacao INTEGER, 
        cotas_magia INTEGER, 
        cotas_tecnicas INTEGER, 
        pontos_aptidao INTEGER, 
        pontos_raca INTEGER, 
        pontos_classe INTEGER, 
        pontos_profissao INTEGER, 
        fisico INTEGER, 
        destreza INTEGER, 
        agilidade INTEGER, 
        presenca INTEGER, 
        magia INTEGER, 
        intelecto INTEGER, 
        fortitude INTEGER, 
        luta INTEGER, 
        arremesso INTEGER, 
        bloqueio INTEGER, 
        atletismo INTEGER, 
        reflexo INTEGER, 
        iniciativa INTEGER, 
        crime INTEGER, 
        pontaria INTEGER, 
        furtividade INTEGER, 
        enganacao INTEGER, 
        intimidacao INTEGER, 
        encorajamento INTEGER, 
        percepcao INTEGER, 
        atualidades INTEGER, 
        sobrevivencia INTEGER, 
        vontade INTEGER, 
        encanto INTEGER, 
        ocultismo INTEGER, 
        medicina INTEGER, 
        artes INTEGER, 
        adestramento INTEGER, 
        diplomacia INTEGER, 
        investigacao INTEGER, 
        tatica INTEGER, 
        religiao INTEGER, 
        pilotagem_direcao INTEGER, 
        metalurgia INTEGER, 
        marcenaria INTEGER, 
        artesanato INTEGER, 
        negociacao INTEGER, 
        tecnologia INTEGER,
        listaitems TEXT,
        listafeiticos TEXT
    );`);
    
    database.run(`INSERT INTO tokens (
        owner, name, raca, class, profession, level, vida, vigor, mana, sanidade, saciedade, hidratacao, 
        cotas_magia, cotas_tecnicas, pontos_aptidao, pontos_raca, pontos_classe, pontos_profissao, 
        fisico, destreza, agilidade, presenca, magia, intelecto, fortitude, luta, arremesso, bloqueio, 
        atletismo, reflexo, iniciativa, crime, pontaria, furtividade, enganacao, intimidacao, encorajamento, 
        percepcao, atualidades, sobrevivencia, vontade, encanto, ocultismo, medicina, artes, adestramento, 
        diplomacia, investigacao, tatica, religiao, pilotagem_direcao, metalurgia, marcenaria, artesanato, 
        negociacao, tecnologia, listaitems, listafeiticos
    ) VALUES (
        1, 'Kraven', 'Vampiro', 'Feiticeiro', 'Alquimista', 10, 120, 90, 150, 80, 100, 100, 
        5, 3, 200, 10, 15, 2, 
        3, 5, 4, 6, 8, 7, 10, 10, 0, 10, 
        7, 5, 0, 0, 3, 5, 10, 8, 0, 
        5, 0, 3, 5, 10, 7, 0, 6, 4, 
        3, 2, 0, 5, 2, 1, 2, 3, 5, 3, 'exemplo', 'exemplo'
    );`);
    

    
});

database.close();