// recuperar.js
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const email = document.getElementById('email').value;

    if (email === '') {
        alert('Por favor, preencha o campo de e-mail.');
    } else {
        alert('Solicitação de recuperação de senha enviada!');
        // Aqui você pode adicionar a lógica para enviar a solicitação de recuperação
    }
});