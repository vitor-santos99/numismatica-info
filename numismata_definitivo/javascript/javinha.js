function validateForm() {
    // Obter os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const state = document.getElementById('state').value;
    const message = document.getElementById('message').value;

    // Verificar se os campos estão vazios
    if (!name || !email || !phone || !state || !message) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false; // Impede o envio do formulário
    }

    // Verificar o formato do telefone usando expressão regular
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        alert("Por favor, insira um número de telefone no formato (XX) XXXXX-XXXX.");
        return false;
    }

    // Caso tudo esteja correto, retorna true e envia o formulário
    alert("Formulário enviado com sucesso!");
    return true;
}