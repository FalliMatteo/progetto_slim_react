import {useState} from 'react';

export default function Alunno({alunno, popolaAlunni}){
    const [inCancellazione, setInCancellazione] = useState(false);
    const [confermaCancellazione, setConfermaCancellazione] = useState(false);


    async function cancellaAlunno(){
        setConfermaCancellazione(false);
        setInCancellazione(true)
        await fetch(`http://localhost:8080/alunni/${alunno.id}`, {method: "DELETE"});
        popolaAlunni();
    }
    
    function richiesta(){
        setConfermaCancellazione(true);
    }

    function annulla(){
        setConfermaCancellazione(false);
    }
    return(
        <tr>
            <td>{alunno.nome}</td><td>{alunno.cognome}</td>
            { inCancellazione ?
                <td>Caricamento... </td>
              :
                confermaCancellazione ?
                    <td>Sei sicuro? 
                    <button onClick={cancellaAlunno}>si</button>
                    <button onClick={annulla}>no</button>
                    </td>
                :
                    <td><button onClick={richiesta}>Cancella</button></td>
              
            }
            <hr />

        </tr>

    )
}