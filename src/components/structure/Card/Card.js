import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const jogo = props.data;
  return (
    <Link to={`/view/${jogo._id}`} className="col">
      <div className="card">
        <div className="card-body">
        <img src={jogo.imgurl} alt={jogo.nome} width="80px" height="auto" ></img>
          <h5 className="card-title">{ jogo.nome }</h5>
          
          <span className="badge bg-primary">{jogo.genero}</span>
          <span className="badge bg-light text-dark">Ano : { jogo.lancamento}</span>
          
        </div>
      </div>
    </Link>
  )
}

export default Card
