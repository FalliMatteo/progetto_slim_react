import { useState } from "react";

export default function FormDiInserimento({popolaAlunni}){
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [risposta, setRisposta] = useState("");

    async function salvaAlunno(){
        setRisposta(<><br /><span>Caricamento...</span></>)
        const response = await fetch(`http://localhost:8080/alunni`, 
            {  
              method: "POST",
              headers: { 'Content-Type': 'application/json'},
              body: JSON.stringify({nome: nome, cognome: cognome})
            }
        );
        if(response.status == 400){
            setRisposta(<><br /><span className="error">Valori inseriti invalidi</span></>)
        }else{
            setRisposta(<><br /><span>Alunno aggiunto</span></>)
        }
        popolaAlunni();
    }

    function gestisciCambioNome(e){
        setNome(e.target.value);
    }
    function gestisciCambioCognome(e){
        setCognome(e.target.value);
    }

    return(
        <>
            <h3>Form di inserimento</h3>
            <div>Nome: <input type="text" onChange={gestisciCambioNome} /></div><br />
            <div>Cognome: <input type="text"  onChange={gestisciCambioCognome} /></div><br />
            <div><button onClick={salvaAlunno}>salva</button></div>
            {risposta}
        </>

    )
}