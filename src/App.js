import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numeros: [],
    };
  }

  gerarNumeros = () => {
    const numerosGerados = [];
    while (numerosGerados.length < 6) {
      const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
      if (!numerosGerados.includes(numeroAleatorio)) {
        numerosGerados.push(numeroAleatorio);
      }
    }
    this.setState({ numeros: numerosGerados.sort((a, b) => a - b) });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card text-center">
              <div className="card-header">
                <h3>Jogo da Mega-Sena</h3>
              </div>
              <div className="card-body">
                <h5 className="card-title">Números sorteados:</h5>
                <p className="card-text">
                  {this.state.numeros.length === 0
                    ? "Clique no botão para gerar números"
                    : this.state.numeros.join(", ")}
                </p>
                <button className="btn btn-primary" onClick={this.gerarNumeros}>
                  Gerar Números
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
