let resposta = document.getElementById('resposta')
let btn_atualizar = document.getElementById('btn_atualizar')

btn_atualizar.addEventListener('click', (e) => {
    e.preventDefault()
    
    const codQuarto = Number(document.getElementById('codQuarto').value)

    if (!codQuarto) {
        resposta.innerHTML = '<p>Por favor, informe o Código do Quarto!</p>'
        return
    }

    const quartoAtualizado = {
        numero: Number(document.getElementById('numero').value),
        diasHospedagem: Number(document.getElementById('diasHospedagem').value),
        valorDiaria: Number(document.getElementById('valorDiaria').value),
        idHospede: Number(document.getElementById('idHospede').value)
    }

    fetch(`http://localhost:3000/quarto/${codQuarto}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quartoAtualizado)
    })
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ''
        resposta.innerHTML = `
            <div>
                <p><strong>Código:</strong> ${dados.codQuarto}</p>
                <p><strong>Número:</strong> ${dados.numero}</p>
                <p><strong>Dias de Hospedagem:</strong> ${dados.diasHospedagem}</p>
                <p><strong>Valor Diária:</strong> R$ ${dados.valorDiaria}</p>
                <p><strong>ID Hóspede:</strong> ${dados.idHospede}</p>
            </div>
        `
        document.querySelector('form').reset()
    })
    .catch((err) => {
        console.error('Erro ao atualizar os dados', err)
        resposta.innerHTML = '<p>Erro ao tentar atualizar o quarto.</p>'
    })
})