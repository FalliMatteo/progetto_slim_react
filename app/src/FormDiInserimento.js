import { useState } from "react";

export default function FormDiInserimento({popolaAlunni}){
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [risposta, setRisposta] = useState("");

    async function salvaAlunno(){
        setRisposta(<p>Caricamento...</p>)
        const response = await fetch(`http://localhost:8080/alunni`, 
            {  
              method: "POST",
              headers: { 'Content-Type': 'application/json'},
              body: JSON.stringify({nome: nome, cognome: cognome})
            }
        );
        if(response.status == 400){
            setRisposta(<p className="error">Campi inseriti invalidi</p>)
        }else{
            setRisposta(<p>Persona aggiunta</p>)
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
            <h1>Form di inseriemto</h1>
            <div>Nome: <input type="text" onChange={gestisciCambioNome} /></div><br />
            <div>Cognome: <input type="text"  onChange={gestisciCambioCognome} /></div><br />
            <div><button onClick={salvaAlunno}>salva</button></div><br />
            {risposta}
        </>

    )
}