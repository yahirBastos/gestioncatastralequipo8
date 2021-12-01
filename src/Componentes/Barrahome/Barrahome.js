import React from "react";
import { Link } from "react-router-dom";

class Barrahome extends React.Component {
    render() {
        return (

            <div className="container px-5">
                <div className="navbar-brand"><img className="gobernacionmag" src={this.props.imagen} alt={this.props.alt} /></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link to={this.props.linkinicio} class="nav-link active" aria-current="page">Inicio</Link></li>
                        <li className="nav-item"><Link to={this.props.linkpolitica} className="nav-link">Politica de Privacidad</Link></li>
                        <li className="nav-item"><Link to={this.props.linkregistrar} className="nav-link">Registrar</Link></li>
                        <li className="nav-item"><Link to={this.props.linklog} className="nav-link">Iniciar Sesion</Link></li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Barrahome;