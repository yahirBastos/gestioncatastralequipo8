
import React from "react";
import { Link } from "react-router-dom";

class Tarjeta extends React.Component {
    render() {
        return (

            <div className="col-lg-6">
                <div className="p-5">
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">{this.props.titulo}</h1>
                    </div>
                    <form class="user">
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                    placeholder="Nombres" name = {this.props.nombres}/>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-user" id="exampleLastName"
                                    placeholder="Apellidos" name = {this.props.apellidos} />
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                placeholder="Correo Electronico" name = {this.props.correo}/>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-6 ">
                                <input type="text" class="form-control form-control-user" id="exampleLastName"
                                    placeholder="Telefono" name = {this.props.telefono}/>
                                <br />
                            </div>

                            <div class="col-sm-6">
                                <select class="form-control form-control-userselect" id="gender" name = {this.props.sexo}>
                                    <option value="choice">Sexo</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                    <option value="Otro">Otro</option>
                                </select>
                                <br />
                            </div>
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="password" class="form-control form-control-user"
                                    id="exampleInputPassword" placeholder="Contraseña" name = {this.props.password}/>
                            </div>
                            <div class="col-sm-6">
                                <input type="password" class="form-control form-control-user"
                                    id="exampleRepeatPassword" placeholder="Repetir Contraseña" name = {this.props.passrepet}/>
                            </div>
                        </div>
                        <Link to={this.props.linkregistro} className="btn btn-primary btn-user btn-block">Registrar Cuenta</Link>
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

export default Tarjeta;