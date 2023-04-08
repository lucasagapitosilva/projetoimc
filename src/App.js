import { useState } from 'react';

import { Container, DivForm, Form } from './styled';


function App() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState();
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  const [imc, setImc] = useState('');
  const [descricao, setDescricao] = useState(true);


  function handleIMC(e) {
    e.preventDefault();
    
    if(nome === '' || idade === '' || altura === '' || peso === '' ){
      return alert('Preencha todos os campos !')
    }
  
    let imcDados = peso / (altura * altura);
    console.log(imcDados)

    if(imcDados < 18.5) {
      setDescricao(false);
      setImc(imcDados.toFixed(1) + ' abaixo do peso normal');
      return;
      //Abaixo do peso normal
    }
    
  }

  return (
    <Container>
      <DivForm>
        <h1>Tabela IMC</h1>

        <Form onSubmit={handleIMC}>
          <label>Nome</label>
          <input
          type='text'
          value={nome}
          onChange={e => setNome(e.target.value)}
          />

          <label>Idade</label>
          <input 
          type='number'
          value={idade}
          onChange={e => setIdade(e.target.value)}
          />

          <label>Altura</label>
          <input 
          type='text'
          placeholder='exemplo: 1.80 cm'
          value={altura}
          onChange={e => setAltura(e.target.value)}
          />

          <label>Peso</label>
          <input 
          type='text'
          placeholder='exemplo: 70.6 Kg'
          value={peso}
          onChange={e => setPeso(e.target.value)}
          />

          <button type='submit'>Calcular</button>
        </Form>

        {descricao ? (
          <></>
        ) : (<>
          <p>Nome: {nome}</p>
          <p>Idade: {idade}</p>
          <p>Você tá com IMC {imc}</p>
        </>)}
      </DivForm>
    </Container>
  );
}

export default App;
