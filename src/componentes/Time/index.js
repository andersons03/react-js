import Colaborador from "../Colaborador";
import "./time.css";

const Time = (props) => {
    const cssSection = {backgroundColor: props.corSecundaria}
    const cssTitle = {borderColor: props.corPrimaria}

    return(
        (props.colaboradores.length > 0) ? <section className="time" style={cssSection}>
            <h3 className="time__title" style={cssTitle}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map((colaborador) => 
                    <Colaborador 
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem} 
                    />
                )}
            </div>
        </section> : ""
    )
}

export default Time;