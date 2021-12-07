import React from "react";
import { Link } from "react-router-dom";

class Formasociarpredio extends React.Component {
    enviar = (e) => {
        e.preventDefault();
        const data = {
            codigodeusuario: e.target.codigodeusuario.value,

        };

        this.props.procDatos(data)
    }
    render() {
        return (
            <div className="form-group row">
                <form className="form-group row" onSubmit={this.enviar}>
                    <div className="col-sm-6 ">
                        <input type="text" className="form-control form-control-user" id="codigodeusuario"
                            placeholder="Código de Predio" name={this.props.codigodeusuario} />
                        <br />
                    </div>
                    <div className="col-sm-6 ">
                        <button className="btn btn-primary btn-user btn-block">Consultar</button>
                    </div>
                </form>
                <hr />
                <div className="form-group row">
                    <div className="form-group">
                        <input type="texto" readonly="readonly" className="form-control form-control-user" id="exampledireccion"
                            placeholder="Direccion del Predio" name={this.props.Direccion} />
                    </div>
                    <div className="form-group">
                        <input type="texto" readonly="readonly" className="form-control form-control-user" id="examplenombretitular"
                            placeholder="Nombre del Titular" name={this.props.Nombretitular} />
                    </div>
                    <div className="form-group">
                        <input type="texto" readonly="readonly" className="form-control form-control-user" id="exampleestrato"
                            placeholder="Estrato" name={this.props.Estrato} />
                    </div>
                    <Link to={this.props.linkasosciar} className="btn btn-primary btn-user btn-block">Asociar</Link>
                </div>
            </div>
        )
    }
}
export default Formasociarpredio;