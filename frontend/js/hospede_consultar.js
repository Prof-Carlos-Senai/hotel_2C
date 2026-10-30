let resposta = document.getElementById('resposta')
let btn_consultar = document.getElementById('btn_consultar')

btn_consultar.addEventListener('click', (e) => {
    e.preventDefault()
    
    const codHospede = Number(document.getElementById('codHospede').value)

    fetch(`http://localhost:3000/hospede/${codHospede}`)
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
    })
    .catch((err) => {
        console.error('Erro ao consultar os dados', err)
        resposta.innerHTML = '<p>Erro ao conectar com o servidor.</p>'
    })
})