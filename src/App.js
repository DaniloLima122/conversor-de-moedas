import React from 'react';

import Coversor from "./componentes/Conversor";

import "./App.css";

class App extends React.Component {


  render() {
    return (
      <div className="App"> 
          <h2>Conversor de moedas</h2>
        <span>
          <Coversor moedaA="USD" moedaB="BRL" />
          <Coversor moedaA="BRL" moedaB="USD" />
          <Coversor moedaA="EUR" moedaB="BRL" />
          <Coversor moedaA="BRL" moedaB="EUR" />
        </span>       
      </div>
    );
  }

}

export default App;
