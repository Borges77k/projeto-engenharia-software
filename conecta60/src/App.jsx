
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Controla qual tela está aberta
  const [tela, setTela] = useState('inicio')
  // Campos dos lembretes
const [lembretes, setLembretes] = useState(() => {
  const dadosSalvos = localStorage.getItem('lembretes')
  return dadosSalvos ? JSON.parse(dadosSalvos) : []
})

const [nomeLembrete, setNomeLembrete] = useState('')
const [dataLembrete, setDataLembrete] = useState('')
const [horarioLembrete, setHorarioLembrete] = useState('')
// Campos dos contatos
const [contatos, setContatos] = useState(() => {
  const dadosSalvos = localStorage.getItem('contatos')
  return dadosSalvos ? JSON.parse(dadosSalvos) : []
})

const [nomeContato, setNomeContato] = useState('')
const [telefoneContato, setTelefoneContato] = useState('')
  // Recupera os compromissos salvos no navegador
  const [compromissos, setCompromissos] = useState(() => {
    const dadosSalvos = localStorage.getItem('compromissos')

    return dadosSalvos ? JSON.parse(dadosSalvos) : []
  })

  // Campos do formulário
  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [horario, setHorario] = useState('')

  // Salva os compromissos automaticamente
  useEffect(() => {
    localStorage.setItem(
      'compromissos',
      JSON.stringify(compromissos)
    )
  }, [compromissos])
  useEffect(() => {
  localStorage.setItem(
    'lembretes',
    JSON.stringify(lembretes)
  )
}, [lembretes])
// Salva os contatos automaticamente
useEffect(() => {
  localStorage.setItem(
    'contatos',
    JSON.stringify(contatos)
  )
}, [contatos])
  // Adiciona um compromisso
  function adicionarCompromisso(event) {
    event.preventDefault()

    if (!nome.trim() || !data || !horario) {
      alert('Preencha todos os campos!')
      return
    }

    const novoCompromisso = {
      id: Date.now(),
      nome: nome.trim(),
      data,
      horario
    }

    setCompromissos((listaAtual) => [
      ...listaAtual,
      novoCompromisso
    ])

    setNome('')
    setData('')
    setHorario('')
  }

  // Exclui um compromisso
  function excluirCompromisso(id) {
    const confirmar = window.confirm(
      'Deseja realmente excluir este compromisso?'
    )

    if (confirmar) {
      setCompromissos((listaAtual) =>
        listaAtual.filter((item) => item.id !== id)
      )
    }
  }

  // Formata a data para o padrão brasileiro
  function formatarData(data) {
    const [ano, mes, dia] = data.split('-')
    return `${dia}/${mes}/${ano}`
  }
  // Adiciona um lembrete
  function adicionarLembrete(event) {
    event.preventDefault()

    if (!nomeLembrete.trim() || !dataLembrete || !horarioLembrete) {
      alert('Preencha todos os campos!')
      return
    }

    const novoLembrete = {
      id: Date.now(),
      nome: nomeLembrete.trim(),
      data: dataLembrete,
      horario: horarioLembrete
    }

    setLembretes((listaAtual) => [
      ...listaAtual,
      novoLembrete
    ])

    setNomeLembrete('')
    setDataLembrete('')
    setHorarioLembrete('')

  }
  // Adiciona um contato
  function adicionarContato(event) {
    event.preventDefault()

    if (!nomeContato.trim() || !telefoneContato.trim()) {
      alert('Preencha todos os campos!')
      return
    }

    const novoContato = {
      id: Date.now(),
      nome: nomeContato.trim(),
      telefone: telefoneContato.trim()
    }

    setContatos((listaAtual) => [
      ...listaAtual,
      novoContato
    ])

    setNomeContato('')
    setTelefoneContato('')
  }

  // Exclui um contato
  function excluirContato(id) {
    const confirmar = window.confirm(
      'Deseja realmente excluir este contato?'
    )

    if (confirmar) {
      setContatos((listaAtual) =>
        listaAtual.filter((item) => item.id !== id)
      )
    }
  }

  // Exclui um lembrete
  function excluirLembrete(id) {
    const confirmar = window.confirm(
      'Deseja realmente excluir este lembrete?'
    )

    if (confirmar) {
      setLembretes((listaAtual) =>
        listaAtual.filter((item) => item.id !== id)
      )
    }
  }
  return (
    <main className="pagina">

      {/* Cabeçalho */}
      <header className="cabecalho">
        <div className="logo">
          Conecta<span>60+</span>
        </div>

        <p>
          Tecnologia mais simples, vida mais conectada.
        </p>
      </header>

      {/* Página inicial */}
      {tela === 'inicio' && (
        <>
          <section className="boas-vindas">
            <h1>Olá! Seja bem-vindo(a)!</h1>

            <p>
              Estamos aqui para facilitar o seu dia.
              O que você gostaria de fazer?
            </p>
          </section>

          <section className="acessos">

            <button
              className="cartao"
              onClick={() => setTela('agenda')}
            >
              <span className="icone">📅</span>
              <span>Minha agenda</span>
              <small>Consulte seus compromissos</small>
            </button>

            <button
  className="cartao"
  onClick={() => setTela('lembretes')}
>
  <span className="icone">🔔</span>
  <span>Lembretes</span>
  <small>Veja seus lembretes</small>
</button>

            <button
  className="cartao"
  onClick={() => setTela('contatos')}
>
  <span className="icone">📞</span>
  <span>Contatos</span>
  <small>Acesse seus contatos importantes</small>
</button>

            <button className="cartao">
              <span className="icone">💬</span>
              <span>Assistente</span>
              <small>Precisa de ajuda? Estamos aqui!</small>
            </button>

          </section>
        </>
      )}

      {/* Página da agenda */}
      {tela === 'agenda' && (
        <section className="agenda">

          <button
            className="voltar"
            onClick={() => setTela('inicio')}
          >
            ← Voltar ao início
          </button>

          <h1>Minha agenda 📅</h1>

          <p>
            Cadastre e organize seus compromissos.
          </p>

          {/* Formulário */}
          <form onSubmit={adicionarCompromisso}>

            <label htmlFor="nome">
              Nome do compromisso
            </label>

            <input
              id="nome"
              type="text"
              placeholder="Ex.: Consulta médica"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              required
            />

            <label htmlFor="data">
              Data
            </label>

            <input
              id="data"
              type="date"
              value={data}
              onChange={(event) => setData(event.target.value)}
              required
            />

            <label htmlFor="horario">
              Horário
            </label>

            <input
              id="horario"
              type="time"
              value={horario}
              onChange={(event) => setHorario(event.target.value)}
              required
            />

            <button
              className="adicionar"
              type="submit"
            >
              + Adicionar compromisso
            </button>

          </form>

          {/* Lista de compromissos */}
          <h2>Meus compromissos</h2>

          {compromissos.length === 0 ? (

            <p>
              Você ainda não possui compromissos cadastrados.
            </p>

          ) : (

            <div className="lista-compromissos">

              {compromissos
                .slice()
                .sort((a, b) =>
                  `${a.data}T${a.horario}`.localeCompare(
                    `${b.data}T${b.horario}`
                  )
                )
                .map((item) => (

                  <article
                    className="compromisso"
                    key={item.id}
                  >

                    <div>
                      <h3>{item.nome}</h3>

                      <p>
                        Data: {formatarData(item.data)}
                        {' | '}
                        Horário: {item.horario}
                      </p>
                    </div>

                    <button
                      className="excluir"
                      onClick={() => excluirCompromisso(item.id)}
                    >
                      Excluir
                    </button>

                  </article>

                ))}

            </div>

          )}

        </section>
      )}

      {/* Página de lembretes */}
      {tela === 'lembretes' && (
        <section className="agenda">

          <button
            className="voltar"
            onClick={() => setTela('inicio')}
          >
            ← Voltar ao início
          </button>

          <h1>Meus lembretes 🔔</h1>

          <p>
            Cadastre suas tarefas e lembretes importantes.
          </p>

          <form onSubmit={adicionarLembrete}>

            <label htmlFor="nomeLembrete">
              Nome do lembrete
            </label>

            <input
              id="nomeLembrete"
              type="text"
              placeholder="Ex.: Tomar medicamento"
              value={nomeLembrete}
              onChange={(event) =>
                setNomeLembrete(event.target.value)
              }
              required
            />

            <label htmlFor="dataLembrete">
              Data
            </label>

            <input
              id="dataLembrete"
              type="date"
              value={dataLembrete}
              onChange={(event) =>
                setDataLembrete(event.target.value)
              }
              required
            />

            <label htmlFor="horarioLembrete">
              Horário
            </label>

            <input
              id="horarioLembrete"
              type="time"
              value={horarioLembrete}
              onChange={(event) =>
                setHorarioLembrete(event.target.value)
              }
              required
            />

            <button
              className="adicionar"
              type="submit"
            >
              + Adicionar lembrete
            </button>

          </form>

          <h2>Meus lembretes cadastrados</h2>

          {lembretes.length === 0 ? (

            <p>
              Você ainda não possui lembretes cadastrados.
            </p>

          ) : (

            <div className="lista-compromissos">

              {lembretes
                .slice()
                .sort((a, b) =>
                  `${a.data}T${a.horario}`.localeCompare(
                    `${b.data}T${b.horario}`
                  )
                )
                .map((item) => (

                  <article
                    className="compromisso"
                    key={item.id}
                  >

                    <div>
                      <h3>{item.nome}</h3>

                      <p>
                        Data: {formatarData(item.data)}
                        {' | '}
                        Horário: {item.horario}
                      </p>
                    </div>

                    <button
                      className="excluir"
                      onClick={() => excluirLembrete(item.id)}
                    >
                      Excluir
                    </button>

                  </article>

                ))}

            </div>

          )}

        </section>
      )}
      {/* Página de contatos */}
      {tela === 'contatos' && (
        <section className="agenda">

          <button
            className="voltar"
            onClick={() => setTela('inicio')}
          >
            ← Voltar ao início
          </button>

          <h1>Contatos importantes 📞</h1>

          <p>
            Cadastre pessoas importantes para facilitar o contato.
          </p>

          <form onSubmit={adicionarContato}>

            <label htmlFor="nomeContato">
              Nome da pessoa
            </label>

            <input
              id="nomeContato"
              type="text"
              placeholder="Ex.: Maria"
              value={nomeContato}
              onChange={(event) =>
                setNomeContato(event.target.value)
              }
              required
            />

            <label htmlFor="telefoneContato">
              Telefone
            </label>

            <input
              id="telefoneContato"
              type="tel"
              placeholder="Ex.: (11) 99999-9999"
              value={telefoneContato}
              onChange={(event) =>
                setTelefoneContato(event.target.value)
              }
              required
            />

            <button
              className="adicionar"
              type="submit"
            >
              + Adicionar contato
            </button>

          </form>

          <h2>Meus contatos cadastrados</h2>

          {contatos.length === 0 ? (

            <p>
              Você ainda não possui contatos cadastrados.
            </p>

          ) : (

            <div className="lista-compromissos">

              {contatos.map((item) => (

                <article
                  className="compromisso"
                  key={item.id}
                >

                  <div>
                    <h3>{item.nome}</h3>
                    <p>Telefone: {item.telefone}</p>

                    <a href={`tel:${item.telefone}`}>
                      📞 Ligar
                    </a>
                  </div>

                  <button
                    className="excluir"
                    type="button"
                    onClick={() => excluirContato(item.id)}
                  >
                    Excluir
                  </button>

                </article>

              ))}

            </div>

          )}

        </section>
      )}
      {/* Rodapé */}
      <footer>
        <p>
          Conecta60+ — Mais autonomia para o seu dia a dia.
        </p>
           </footer>

    </main>
  )
}

export default App
