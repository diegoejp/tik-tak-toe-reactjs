function Ganador(props){
    return(
        
        <div className={"alerta "+props.clase}>
            {(props.esto === "Empate")? <div>Empate</div> : <div>Ganador Jugador : {props.nombre}</div>}
        
        </div>
        
    )
}


export default Ganador;