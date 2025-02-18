const storedLogin = JSON.parse(sessionStorage.getItem('login'));

window.addEventListener('load', function() {
    if (storedLogin && !storedLogin.login) {
        window.location.href = '../../../../index.html';
    }
}); 