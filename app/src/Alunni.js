import Alunno from "./Alunno.js"

export default function Alunni({alunni, popolaAlunni}){
    return (
        <table className='alunni'>
        {
            alunni.map(a => (
                <Alunno alunno={a} popolaAlunni={popolaAlunni} key={a.id} />
              ))
        }
        </table>
    );
}