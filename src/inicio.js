function Inicio(props){
    return(
        <div>
            <h1>Hola mundirijillo</h1>
            
                <input type="text" name="jugador1" placeholder="Ingrese Jugador X" onChange={props.handleChange} />
                <input type="text" name="jugador2" placeholder="Ingrese Jugador O" onChange={props.handleChange}/>
                <h3>Escoge Quién Parte</h3>
                <label>{props.player1}</label>
                <input type="button" value="X" onClick={props.btnX}/>
                <label>{props.player2}</label>
                <input type="button" value="O" onClick={props.btnO}/>
            
            
        </div>
    )
}


export default Inicio;