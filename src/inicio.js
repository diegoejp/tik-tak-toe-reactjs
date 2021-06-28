function Inicio(props){
    return(
        <div className={""+props.claseExtra}>
            <h1 className="display-2">¿Quién Parte?</h1>
            <div className="d-flex justify-content-around">
                <div>
                    <p className="display-4">{props.player1}</p>
                    <input className="btn btn-dark" type="button" value="X" onClick={props.btnX}/>
                </div>
                <div>
                    <p className="display-4">{props.player2}</p>
                    <input className="btn btn-dark" type="button" value="O" onClick={props.btnO}/>
                </div>
            </div>
            
        </div>
    )
}


export default Inicio;