const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let user;

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
                //console.log('Dados do usuário:', user);
                //console.log(`ID: ${user.id}`);
                //console.log(`Nome de usuário: ${user.username}`);
                //console.log(`Senha do usuário: ${user.password}`);
                window.location.href = '/pages/home.html';
                delete user.password;
                return user;
            } else {
                alert('Senha incorreta.');
            }
        } else {
            const error = await response.json();
            alert(error.error || 'Erro desconhecido.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Algo deu errado. Tente novamente.');
    }
});