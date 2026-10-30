let resposta = document.getElementById('resposta')
let btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click', (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/hospedes')
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ''
        let conteudo = ''
        dados.forEach(el => {
            conteudo += `
                <div">
                    <p><strong>Código:</strong> ${el.codHospede}</p>
                    <p><strong>Nome:</strong> ${el.nome}</p>
                    <p><strong>CPF:</strong> ${el.cpf}</p>
                    <p><strong>E-mail:</strong> ${el.email}</p>
                    <p><strong>Telefone:</strong> ${el.telefone}</p>
                    <br>
                </div>
            `
        })
        resposta.innerHTML = conteudo
    })
    .catch((err) => {
        console.error('Erro ao listar os dados', err)
        resposta.innerHTML = '<p>Erro ao conectar com o servidor.</p>'
    })
})