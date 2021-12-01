
import React from "react";
import { Link } from "react-router-dom";

class Tarjeta extends React.Component {
    render() {
        return (

            <div className="col-lg-5">
                <h1 className="font-weight-light">{this.props.titulo}</h1>
                <p>{this.props.texto}</p>
                <Link to={this.props.link} className="btn btn-primary btn-sm">¡Registrar Aquí!</Link>
            </div>

        )
    }
}

export default Tarjeta;