document.addEventListener('DOMContentLoaded', function() {
    const loginTab = document.querySelector('#login-tab');
    const registerTab = document.querySelector('#register-tab');
    const loginDiv = document.querySelector('#tab-0da5');
    const registerDiv = document.querySelector('#tab-14b7');

    loginTab.addEventListener('click', function() {
        loginDiv.classList.add('u-tab-active');
        registerDiv.classList.remove('u-tab-active');
    });

    registerTab.addEventListener('click', function() {
        registerDiv.classList.add('u-tab-active');
        loginDiv.classList.remove('u-tab-active');
    });

    const registerForm = document.querySelector('#register-form');
    const loginForm = document.querySelector('#login-form');
    const loginButton = document.querySelector('#login-button');

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.querySelector('#register-email').value;
        const password = document.querySelector('#register-password').value;
        const confirmPassword = document.querySelector('#register-confirm-password').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        if (localStorage.getItem(email)) {
            alert('El correo ya está registrado.');
        } else {
            localStorage.setItem(email, password);
            alert('Registrado exitosamente.');
        }
    });

    loginButton.addEventListener('click', function(e) {
        e.preventDefault();
        const email = document.querySelector('#username-a30d').value;
        const password = document.querySelector('#password-a30d').value;

        const storedPassword = localStorage.getItem(email);
        if (storedPassword && storedPassword === password) {
            alert('Inicio de sesión exitoso.');
            window.location.href = 'Página-lg.html';
        } else {
            alert('Correo o contraseña incorrectos.');
        }
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.querySelector('#username-a30d').value;
        const password = document.querySelector('#password-a30d').value;

        const storedPassword = localStorage.getItem(email);
        if (storedPassword && storedPassword === password) {
            alert('Inicio de sesión exitoso.');
            window.location.href = 'Página-lg.html';
        } else {
            alert('Correo o contraseña incorrectos.');
        }
    });
});
