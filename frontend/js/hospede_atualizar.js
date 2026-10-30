let resposta = document.getElementById('resposta')
let btn_atualizar = document.getElementById('btn_atualizar')

btn_atualizar.addEventListener('click', (e) => {
    e.preventDefault()
    
    const codHospede = Number(document.getElementById('codHospede').value)

    if (!codHospede) {
        resposta.innerHTML = '<p>Por favor, informe o Código do Hóspede!</p>'
        return
    }

    const hospedeAtualizado = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value
    }

    fetch(`http://localhost:3000/hospede/${codHospede}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(hospedeAtualizado)
    })
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ''
        resposta.innerHTML = `
            <div>
                <p><strong>Código:</strong> ${dados.codHospede}</p>
                <p><strong>Nome:</strong> ${dados.nome}</p>
                <p><strong>CPF:</strong> ${dados.cpf}</p>
                <p><strong>E-mail:</strong> ${dados.email}</p>
                <p><strong>Telefone:</strong> ${dados.telefone}</p>
                <br>
            </div>
        `
        document.querySelector('form').reset()
    })
    .catch((err) => {
        console.error('Erro ao atualizar os dados', err)
        resposta.innerHTML = '<p>Erro ao tentar atualizar o hóspede.</p>'
    })
})