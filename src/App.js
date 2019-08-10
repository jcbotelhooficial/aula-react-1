import React from 'react';
import InputCustumer from './components/InputCustumer';
import './App.css';

function App() {
  return (
    <div className="application">
      <form className="form" onSubmit={event => {
        console.log('this', this);
        event.preventDefault();
        // this.event.myList = this.event.myList !== undefined ? this.event.myList : [];
        this.setState({
          "nome": event.target.nome.value,
          "email": event.target.nome.value,
          "senha": event.target.senha.value
        });
        console.log('log>>>>', this.state)
      }} method="GET">
        <InputCustumer id="nome" name="nome" type="text" label="Nome" />
        <InputCustumer id="email" name="email" type="email" label="Email" />
        <InputCustumer id="senha" name="senha" type="password" label="Senha" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
