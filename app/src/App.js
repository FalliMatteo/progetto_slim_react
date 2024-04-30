import './App.css';
import Alunni from './Alunni'
import FormDiInserimento from './FormDiInserimento'
import {useState, useEffect} from 'react'

function App() {

  useEffect(() => {
    popolaAlunni();
  },[])

  const [alunni, setAlunni] = useState([]);
  const [pronto, setpronto] = useState(false);
  const [mostraForm, setMostraForm] = useState(false);

  async function popolaAlunni(){
    const response = await fetch("http://localhost:8080/alunni", {method: "GET"});
    const array = await response.json();
    setAlunni(array);
    setpronto(true);
  }

  return (
    <div className="App">
      <h1>Progetto React/Slim</h1>
      {
        pronto ?
          <Alunni alunni={alunni} popolaAlunni={popolaAlunni}/>
        :
         <div>Loading...</div>
      }
      <br />
      <button onClick={() => setMostraForm(true)}>Inserisci nuovo alunno</button>
      { mostraForm &&
        <div>
          <div><FormDiInserimento popolaAlunni={popolaAlunni} /></div><br />
          <button onClick={() => setMostraForm(false)}>Annulla inserimento</button>
        </div>
      }
    </div>
  );
}

export default App;