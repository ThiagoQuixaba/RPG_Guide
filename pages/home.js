const storedLogin = JSON.parse(sessionStorage.getItem('login'));

window.addEventListener('load', function() {
    if (storedLogin && storedLogin.login) {
        window.alert('Seja bem-vindo, ' + storedLogin.user.username + '!');
    } else {
        window.location.href = '../index.html';
    }
}); 