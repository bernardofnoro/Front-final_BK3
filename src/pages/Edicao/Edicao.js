import React, { useEffect, useState } from "react";
import Api from "../../api/api";

const Edicao = (props) => {
  const _id = props.match.params.id;
  const history = props.history;
  // criacao do estado
  const [vaga, setVaga] = useState({});

  // o use effect chama a funcao getById que retorna o objeto do backend de acordo com o id
  useEffect(() => {
    getVagaById();
  }, []);

  const getVagaById = async () => {
    // faz uma chamada para api para pegar o objeto de acordo com o id.
    const response = await Api.fetchGetById(_id);
    const result = await response.json();
    // atualizo o meu estado de acordo com o resultado.
    setVaga(result);
  };

  const handleFieldsChange = (event) => {
    // clono meu objeto do estado
    const campos = { ...vaga };
    // para cada input eu atualizo o seu respectivo valor no obj
    campos[event.target.name] = event.target.value;

    // atualizo o meu estado com esse novo objeto.
    setVaga(campos);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // faco uma copia do estado com obj atualizado.
    const vagaObj = { ...vaga };
    // transforma o salario em inteiro.
    vagaObj.salario = parseInt(vagaObj.salario);
    try {
      const response = await Api.fetchPut(vagaObj, _id);
      const result = await response.json();
      alert(result.message);
      history.push("/"); // forca o historico a voltar para a rota de / => home
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Edição de Jogo</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={vaga.nome}
                    className="form-control"
                    name="nome"
                    id="floatingInput"
                    placeholder="Nome do Jogo"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Nome</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    value={vaga.lancamento}
                    className="form-control"
                    name="lancamento"
                    id="floatingsalario"
                    placeholder="Ano de lançamento"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingsalario">Lançamento</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={vaga.imgurl}
                    className="form-control"
                    name="imgurl"
                    id="floatingInput"
                    placeholder="URL da imagem"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Imagem</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={vaga.genero}
                    className="form-control"
                    name="genero"
                    id="floatingInput"
                    placeholder="Genero do Jogo"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Genero</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={vaga.plataforma}
                    className="form-control"
                    name="plataforma"
                    id="floatingInput"
                    placeholder="Plataformas"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Plataformas</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={vaga.desenvolvedores}
                    className="form-control"
                    name="desenvolvedores"
                    id="floatingInput"
                    placeholder="Desenvolvedores"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Desenvolvedores</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">
                  Enviar
                </button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edicao;
