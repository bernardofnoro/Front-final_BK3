import React from 'react'
import './Cadastro.css';
import Api from '../../api/api';

const Cadastro = (props) => {
  const history = props.history;

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // pego o valor que usuario digitou nos inputs
    const nome = evento.target.nome.value; 
    const lancamento = evento.target.lancamento.value;
    const imgurl = evento.target.imgurl.value;
    const genero = evento.target.genero.value;
    const plataforma = evento.target.plataforma.value;
    const desenvolvedores = evento.target.desenvolvedores.value;

    const jogo = {
     nome,lancamento,imgurl,genero,plataforma,desenvolvedores
    }
    
    try {
      const response = await Api.fetchPost(jogo)
      const result = await response.json();
      alert(result.message);
      history.push('/'); // forca o historico a voltar para a rota de / => home
    } catch(error) {
      console.log(error);
    }
    
  }

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Cadastro de Jogos</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="nome" id="floatingInput" placeholder="Nome do Jogo"/>
                  <label htmlFor="floatingInput">Nome</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control" name="lancamento" id="floatingsalario" placeholder="Ano de lancamento"/>
                  <label htmlFor="floatingsalario">Ano de Lançamento</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="imgurl" id="floatingInput" placeholder="URL da imagem"/>
                  <label htmlFor="floatingInput">Imagem URL</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control" name="genero" id="floatingsalario" placeholder="Genero do Jogo"/>
                  <label htmlFor="floatingsalario">Genero</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="plataforma" id="floatingInput" placeholder="Plataformas"/>
                  <label htmlFor="floatingInput">Plataformas</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control" name="desenvolvedores" id="floatingsalario" placeholder="Desenvolvedores"/>
                  <label htmlFor="floatingsalario">Desenvolvedores</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">Enviar</button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
