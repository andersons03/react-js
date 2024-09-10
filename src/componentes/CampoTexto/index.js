import "./CampoTexto.css";

const CampoTexto = (props) => {

    const placeHolderModificado = `${props.placeholder}...`
    
    const aoDigitado = (event) => {
        // valor = event.target.value;
        // console.log(valor);
        props.aoAlterado(event.target.value)
    };

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} type="text" placeholder={placeHolderModificado} />
        </div>
    )
}

export default CampoTexto;