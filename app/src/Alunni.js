import Alunno from "./Alunno.js"

export default function Alunni({alunni, popolaAlunni, setConfermaModifica, setId}){
    return (
        <table className='alunni'>
        {
            alunni.map(a => (
                <Alunno key={a.id} alunno={a} popolaAlunni={popolaAlunni} setConfermaModifica={setConfermaModifica} setId={setId} />
              ))
        }
        </table>
    );
}