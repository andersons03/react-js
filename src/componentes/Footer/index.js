import RedesSociais from "../RedesSociais";
import "./Footer.css";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="container">
                <RedesSociais />
                <img src="./images/logo.png" alt="" />
                <span>Desenvolvido por Alura.</span>
            </div>
        </footer>
    );
}

export default Footer