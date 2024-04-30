import { useState } from "react";

export default function FormDiInserimento({popolaAlunni, id}){
    const [chiave, setChiave] = useState("nome");
    const [attributo, setAttributo] = useState("");
    const [risposta, setRisposta] = useState("");

    async function modificaAlunno(){
        setRisposta(<><br /><span>Caricamento...</span></>)
        let response = "";
        if(chiave === "nome"){
            response = await fetch(`http://localhost:8080/alunni/nome/` + id, 
                {  
                method: "PUT",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({nome: attributo})
                }
            );
        }else{
            response = await fetch(`http://localhost:8080/alunni/cognome/` + id, 
                {  
                method: "PUT",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({cognome: attributo})
                }
            );
        }
        if(response.status == 400){
            setRisposta(<><br /><span className="error">Valore inserito invalido</span></>)
        }else{
            setRisposta(<><br /><span>Alunno modificato</span></>)
        }
        popolaAlunni();
    }

    function gestisciCambioAttributo(e){
        setAttributo(e.target.value);
    }

    return(
        <>
            <h3>Form di inserimento</h3>
            <input id="nome" type="radio" name="chiave" conClick={() => setChiave("nome")} checked /><label for="nome">Nome</label>
            <input id="cognome" type="radio" name="chiave" conClick={() => setChiave("cognome")} /><label for="cognome">Cognome</label>
            <br /><br />
            <div>Nuovo valore: <input type="text" onChange={gestisciCambioAttributo} /></div><br />
            <div><button onClick={modificaAlunno}>salva</button></div>
            {risposta}
        </>

    )
}