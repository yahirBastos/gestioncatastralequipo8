import React from "react";
import { Link } from "react-router-dom";

class Formasociarpredio extends React.Component{
    render(){
        return(
            <div class="form-group row">
            <div class="col-sm-6 ">
                <input type="text" class="form-control form-control-user" id="examplecodigo"
                    placeholder="Código de Predio" name = {this.props.codigodeusuario}/>
                <br />
            </div>
            
            <div class="col-sm-6 ">
                <Link to={this.props.linkconsulta} className="btn btn-primary btn-user btn-block">Consultar</Link>
            </div>
            <hr/>
            <div class="form-group row">
                <div class="form-group">
                    <input type="texto" readonly="readonly" class="form-control form-control-user" id="exampledireccion"
                    placeholder="Direccion del Predio" name = {this.props.Direccion}/>
                </div>
                <div class="form-group">
                    <input type="texto" readonly="readonly" class="form-control form-control-user" id="examplenombretitular"
                    placeholder="Nombre del Titular" name = {this.props.Nombretitular}/>
                </div>
                <div class="form-group">
                    <input type="texto" readonly="readonly" class="form-control form-control-user" id="exampleestrato"
                    placeholder="Estrato" name = {this.props.Estrato}/>
                </div>
                <Link to={this.props.linkasosciar} className="btn btn-primary btn-user btn-block">Asociar</Link>
            </div>
        </div>
        )
    }
}
export default Formasociarpredio;