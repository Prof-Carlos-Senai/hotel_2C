let resposta = document.getElementById('resposta')
let btn_consultar = document.getElementById('btn_consultar')

btn_consultar.addEventListener('click', (e) => {
    e.preventDefault()
    
    const codQuarto = Number(document.getElementById('codQuarto').value)

    fetch(`http://localhost:3000/quarto/${codQuarto}`)
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
    })
    .catch((err) => {
        console.error('Erro ao consultar os dados', err)
        resposta.innerHTML = '<p>Erro ao conectar com o servidor.</p>'
    })
})