import {useState} from 'react';

export default function Alunno({alunno, popolaAlunni, setConfermaModifica, setId}){
    const [inCancellazione, setInCancellazione] = useState(false);
    const [confermaCancellazione, setConfermaCancellazione] = useState(false);

    async function cancellaAlunno(){
        setConfermaCancellazione(false);
        setInCancellazione(true)
        await fetch(`http://localhost:8080/alunni/${alunno.id}`, {method: "DELETE"});
        popolaAlunni();
    }
    
    function richiestaCancellazione(){
        setConfermaCancellazione(true);
    }

    function annullaCancellazione(){
        setConfermaCancellazione(false);
    }

    function richiestaModifica(){
        setId(alunno.id);
        setConfermaModifica(true);
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
                    <button onClick={annullaCancellazione}>no</button>
                    </td>
                :
                    <td><button onClick={richiestaCancellazione}>Cancella</button></td>
              
            }
            <td><button onClick={richiestaModifica}>Modifica</button></td>
        </tr>
    )
}