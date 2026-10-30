let resposta = document.getElementById('resposta')
let btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', (e) => {
    e.preventDefault()
    
    const quarto = { 
        numero: Number(document.getElementById('numero').value),
        diasHospedagem: Number(document.getElementById('diasHospedagem').value),
        valorDiaria: Number(document.getElementById('valorDiaria').value),
        idHospede: Number(document.getElementById('idHospede').value)
    }

    fetch('http://localhost:3000/quarto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quarto)
    })
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ''
            resposta.innerHTML = `<p>${dados.message}</p>`
            document.querySelector('form').reset()
    })
    .catch((err) => {
        console.error('Erro ao cadastrar quarto', err)
        resposta.innerHTML = '<p>Erro ao tentar cadastrar o quarto.</p>'
    })
})