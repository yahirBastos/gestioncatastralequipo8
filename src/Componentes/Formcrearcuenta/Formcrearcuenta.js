import React from "react";
import { Link } from "react-router-dom";

class Formcrearcuenta extends React.Component{
    render(){
        return(
            <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{this.props.titulo} </h1>
            </div>

            <div class="form-group row">
                <div class="col-sm-6 ">
                    <input type="text" class="form-control form-control-user" id="examplecodigo"
                        placeholder="Código de usuario" name = {this.props.codigodeusuario}/>
                    <br />
                </div>
                <div class="col-sm-6 ">
                    <select class="form-control form-control-userselect" id="Niveldeusuario" name = {this.props.Niveldeusuario}>
                        <option value="choice">Nivel de Usuario</option>
                        <option value="Masculino">Administrador</option>
                        <option value="Femenino">Usuario Interno</option>
                    </select>
                </div>

                <div class="col-sm-6 ">
                    <input type="text" class="form-control form-control-user" id="exampleNombres"
                        placeholder="Nombres" name = {this.props.nombres}/>
                    <br />
                </div>

                <div class="col-sm-6 ">
                    <input type="text" class="form-control form-control-user" id="exampleApellidos"
                        placeholder="Apellidos" name = {this.props.apellidos}/>
                    <br />
                </div>

                <div class="col-sm-6 ">
                    <select class="form-control form-control-userselect" id="gender" name = {this.props.gender}>
                        <option value="choice">Sexo</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                </div>

                <div class="col-sm-6">
                    <input type="text" class="form-control form-control-user"
                        id="exampletelefono" placeholder="Telefono" name = {this.props.Telefono}/>
                    <br/>
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

                <div class="col-sm-6">
                    <input type="text" class="form-control form-control-user"
                        id="examplebarrio" placeholder="Número de Documento" name = {this.props.numerodocumento}/>
                    <br/>
                </div>  

                <div class="form-group">
                        <input type="email" class="form-control form-control-user" id="exampleemail"
                            placeholder="Correo Electronico" name = {this.props.email}/>
                </div>

                <div class="col-sm-6">
                    <input type="text" class="form-control form-control-user"
                        id="examplepassword" placeholder="Contraseña" name = {this.props.contraseña}/>
                    <br/>
                </div> 

                <div class="col-sm-6">
                    <input type="text" class="form-control form-control-user"
                        id="examplereppass" placeholder="Repetir Contraseña" name = {this.props.repcontraseña}/>
                    <br/>
                </div>  
                <Link to={this.props.linkregistropredio} className="btn btn-primary btn-user btn-block">{this.props.nombreboton}</Link>
            </div>
        </div>
        )
    }
}
export default Formcrearcuenta;