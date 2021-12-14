
import React from "react";
import { Link } from "react-router-dom";

class Formregistro extends React.Component {
    enviar = (e) => {
        e.preventDefault();
        const data = {
            nivel: e.target.nivel.value,
            nombre: e.target.nombre.value,
            apellido: e.target.apellido.value,
            gender: e.target.gender.value,
            telefono: e.target.telefono.value,
            tipodocumento: e.target.tipodocumento.value,
            documento: e.target.documento.value,
            email: e.target.email.value,
            contrasena: e.target.contrasena.value,
            repcontrasena: e.target.repcontrasena.value,
        };
        this.props.procDatos(data)
    }
    render() {
        return (

            <div className="col-lg-6">
                <div className="p-5">
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">{this.props.titulo}</h1>
                    </div>
                    <form class="user" onSubmit={this.enviar}>
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" class="form-control form-control-user" id="nombre"
                                    placeholder="Nombre" name={this.props.nombres} />
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-user" id="apellidos"
                                    placeholder="Apellido" name={this.props.apellidos} />
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-user" id="email"
                                placeholder="Correo Electronico" name={this.props.correo} />
                        </div>
                        <div class="form-group row">
                            
                        <div class="col-sm-6">
                                <select class="form-control form-control-userselect" id="tipodocumento" name={this.props.tipodocumento}>
                                    <option value="choice">Tipo de Documento</option>
                                    <option value="cedula">Cédula de Ciudadania</option>
                                    <option value="Cextranjera">Cédula Extanjera</option>
                                    <option value="Otro">Pasaporte</option>
                                </select>

                            </div>

                            <div class="col-sm-6 ">
                                <input type="text" class="form-control form-control-user" id="documento"
                                    placeholder="Documento" name={this.props.numerodocumento} />


                            </div>

                        </div>
                        <div class="form-group row">

                            <div class="col-sm-6 ">
                                <input type="text" class="form-control form-control-user" id="telefono"
                                    placeholder="Telefono" name={this.props.telefono} />
                                <br />
                            </div>

                            <div class="col-sm-6">
                                <select class="form-control form-control-userselect" id="gender" name={this.props.sexo}>
                                    <option value="choice">Sexo</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                    <option value="Otro">Otro</option>
                                </select>
                                <br />
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="password" class="form-control form-control-user"
                                    id="contrasena" placeholder="Contraseña" name={this.props.contrasena} />
                            </div>
                            <div class="col-sm-6">
                                <input type="password" class="form-control form-control-user"
                                    id="repcontrasena" placeholder="Repetir Contraseña" name={this.props.repcontrasena} />
                            </div>
                            <div className="auto" id="auto" style={{"display": "none"}} >
                                <select type="hidden" class="form-control form-control-userselect" id="nivel" name={this.props.nivel}>
                                    <option value="externo">Externo</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn btn-primary btn-user btn-block">Registrar Cuenta</button>
                    </form>
                    <br />
                    <div class="text-center">
                        <Link to={this.props.linkolvido} className="small">Olvidé mi contraseña</Link>
                    </div>
                    <div class="text-center">
                        <Link to={this.props.linklogin} className="small">Ya tengo una cuenta</Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default Formregistro;