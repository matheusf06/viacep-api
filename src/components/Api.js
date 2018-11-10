import React, { Component } from 'react';

import axios from 'axios';

export default class Api extends Component {
  constructor(props) {
    super(props);
    this.state = { array: [], cep: '01001000' }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange = (event) => {
    this.setState({ cep: event.target.value })
  }


  componentDidMount() {
    this.conferir()
  }

  conferir = () => {
    axios.get('https://viacep.com.br/ws/' + this.state.cep + '/json/')
      .then((response) => {
        this.setState({ array: response.data })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>

        <h2>Via cep</h2>

        <div className="box">
          <p style={{ marginRight: "80px" }}>Digite seu cep:</p>
          <input type="text" placeholder={this.state.cep} onChange={this.handleChange.bind(this)} />
          <div>
            <button onClick={this.conferir}>Verificar</button>
          </div>
          <div style={{ paddingTop: "20px", paddingLeft: "80px" }}>
            <p style={{ marginRight: "20px", position: "fixed" }}><b>Rua:</b> {this.state.array.logradouro}</p>
            <p style={{ paddingTop: "30px", marginRight: "60px", position: "fixed" }}><b>Bairro:</b> {this.state.array.bairro}</p>
            <p style={{ paddingTop: "60px", marginRight: "10px", position: "fixed" }}><b>Cidade:</b> {this.state.array.localidade}</p>
            <p style={{ paddingTop: "90px", marginRight: "60px", position: "fixed" }}><b>Estado:</b> {this.state.array.uf}</p>
          </div>
        </div>

      </div>
    );
  }
}

