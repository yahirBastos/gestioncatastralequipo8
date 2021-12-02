import React from "react";
import { Link } from "react-router-dom";


class Formcrearpredio extends React.Component{

    render(){
        return(
            <div className="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Formulario Creación de Predios</h1>
                </div>

                <div class="form-group row">
                    <div class="form-group">
                        <input type="text" class="form-control form-control-user" id="examplecodigopredio"
                            placeholder="Código del Predio" name = {this.props.codigopredio}/>
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control form-control-user" id="examplenombrepropietario"
                            placeholder="Nombre del Propietario" name = {this.props.nombre}/>
                    </div>

                    <div class="col-sm-6">
                        <select class="form-control form-control-userselect" id="documento" name = {this.props.tipodocumento}>
                            <option value="choice">Tipo de Documento</option>
                            <option value="Masculino">Cédula de Ciudadania</option>
                            <option value="Femenino">Cédula Extanjera</option>
                            <option value="Otro">Pasaporte</option>
                        </select>
                        <br />
                    </div>
                    <div class="col-sm-6 ">
                        <input type="text" class="form-control form-control-user" id="exampledocumento"
                            placeholder="Número de Documento" name = {this.props.numerodocumento}/>
                        <br />
                    </div>

                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <input type="password" class="form-control form-control-user"
                            id="exampleareatotal" placeholder="Área Total del Predio" name = {this.props.areatotal}/>
                    </div>

                    <div class="col-sm-6">
                        <input type="password" class="form-control form-control-user"
                            id="exampleareaconstruida" placeholder="Área Construida del Predio" name = {this.props.areaconstruida}/>
                        <br/>
                    </div>   
                    
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <input type="password" class="form-control form-control-user"
                            id="exampledirección" placeholder="Dirección" name = {this.props.direccion}/>
                    </div>

                    <div class="col-sm-6">
                        <input type="password" class="form-control form-control-user"
                            id="examplebarrio" placeholder="Barrio" name = {this.props.barrio}/>
                        <br/>
                    </div>  

                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <input type="password" class="form-control form-control-user"
                            id="exampleareatotal" placeholder="Estrato" name = {this.props.estrato}/>
                        <br />
                    </div>
                    <Link to={this.props.linkregistropredio} className="btn btn-primary btn-user btn-block">Registrar Predio</Link>
                </div>
            </div>
        );
    }
}

export default Formcrearpredio;