// cadastro.js
document.getElementById('atualizar-foto').addEventListener('click', function() {
    const photoUrl = document.getElementById('photo').value;
    const fotoUsuario = document.getElementById('foto-usuario');
    
    if (photoUrl) {
        fotoUsuario.src = photoUrl;
        fotoUsuario.style.display = 'block';
    } else {
        fotoUsuario.style.display = 'none';
    }
});

document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const photo = document.getElementById('photo').value;

    if (name && age && email && password) {
        alert('Cadastro realizado com sucesso!');
        // Aqui você pode adicionar a lógica para salvar os dados do usuário
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});