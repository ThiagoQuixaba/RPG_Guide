const form = document.querySelector('form');

let user;
let login = {
    login: false,
    user: null
};

window.addEventListener('load', function() {
    login.login = false;
    login.user = null;
    sessionStorage.setItem('login', JSON.stringify(login));
});

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            user = await response.json();

            if (user.password === password) {
                if (user.admin === 'true') {
                    delete user.password;
                    login.login = true;
                    login.user = user;

                    // Armazenar login
                    sessionStorage.setItem('login', JSON.stringify(login));

                    // Redirecionando
                    window.location.href = ''; // em breve
                } else {
                    delete user.password;
                    login.login = true;
                    login.user = user;

                    // Armazenar login
                    sessionStorage.setItem('login', JSON.stringify(login));

                    // Redirecionando
                    window.location.href = '/pages/home.html';
                }
            } else {
                alert('Senha incorreta.');
            }
        } else {
            // Armazenar login
            const error = await response.json();
            alert(error.error || 'Erro desconhecido.');
        }
    } catch (error) {
        // Armazenar login
        console.error('Erro:', error);
        alert('Algo deu errado. Tente novamente.');
    }
});
