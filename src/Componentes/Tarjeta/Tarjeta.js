import React from "react";
import { Link} from "react-router-dom";

class Tarjeta extends React.Component {
    render() {
        return(
        
            <div className="card h-100">
                <div className="card-bodyh">
                    <h2 className="card-title">{this.props.titulo}</h2>
                    <div className="text-img">
                        <img className="cont1" src={this.props.imagen} alt="cont1" /><p className="card-text">{this.props.texto}</p>
                    </div>
                </div>
                <div className="card-footer"><Link to={this.props.link} className="btn btn-primary btn-sm">Más Información </Link></div>
            </div>
       
        )
    }
}

export default Tarjeta;