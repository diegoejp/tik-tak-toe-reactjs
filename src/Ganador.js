function Ganador(props){
    return(
        
        <div className={"alerta "+props.clase}>
            {(props.esto === "Empate")? <div>Empate</div> : <div>{props.nombre} GANADOR!!!!</div>}
        
        </div>
        
    )
}


export default Ganador;