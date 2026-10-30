let resposta = document.getElementById('resposta')
let btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click', (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/quartos')
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ''
        let conteudo = ''
        dados.forEach(el => {
            conteudo += `
                <div>
                    <p><strong>Código:</strong> ${el.codQuarto}</p>
                    <p><strong>Número:</strong> ${el.numero}</p>
                    <p><strong>Dias de Hospedagem:</strong> ${el.diasHospedagem}</p>
                    <p><strong>Valor Diária:</strong> R$ ${el.valorDiaria}</p>
                    <p><strong>ID Hóspede:</strong> ${el.idHospede}</p>
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