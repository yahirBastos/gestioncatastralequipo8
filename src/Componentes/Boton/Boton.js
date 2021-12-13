

import React from "react";
import { Link} from "react-router-dom";

class Boton extends React.Component {
    render() {
        return(
        
        <Link to={this.props.link} className="btn btn-primary btn-user btn-block" name ={this.props.codigo} onClick={this.props.click}>{this.props.texto}</Link>
         
        )
    }
}

export default Boton;