import React from "react";

function Card({ cep, conferir, data, handleCep }) {
  return (
    <div className="box">
      <h1>Digite seu cep:</h1>
      <input type="text" placeholder={`Ex: ${cep}`} onChange={handleCep} />
      <div className="data">
        <div className="divData">
          <p>
            <b>Rua:</b> <p>{data.logradouro}</p>
          </p>
          <br />
          <p>
            <b>Bairro:</b> <p>{data.bairro}</p>
          </p>
        </div>
        <div className="divData">
          <p>
            <b>Cidade:</b> <p>{data.localidade}</p>
          </p>
          <br />
          <p>
            <b>Estado:</b> <p>{data.uf}</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
