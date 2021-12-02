import React from "react";
import { Link } from "react-router-dom";

class Formlogin extends React.Component {
    render() {
        return (

            <div className="col-lg-6">
                <div className="p-5">
                    <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">{this.props.titulo}</h1>
                    </div>
                    <form className="user">
                        <div className="form-group">
                            <input type="text" className="form-control form-control-user"
                                id="exampleInputEmail" aria-describedby="emailHelp"
                                placeholder= "Usuario" name = {this.props.usuario} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-user"
                                id="exampleInputPassword" placeholder= "Contraseña" name = {this.props.contrasena} />
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                                <input type="checkbox" className="custom-control-input" id="customCheck" name = {this.props.checkbox}/>
                                <label class="custom-control-label" for="customCheck">Recordar
                                    Datos</label >
                            </div>
                        </div>
                        <Link to={this.props.linkinicio} className="btn btn-primary btn-user btn-block">Iniciar Sesión</Link>
                        <br />
                        <div className="text-center">
                            <Link to={this.props.linkolvido} className="small">Olvidé mi contraseña</Link>
                        </div>
                        <div className="text-center">
                            <Link to={this.props.linkregistro} className="small">Crear Nueva Cuenta</Link>
                        </div>
                        <hr />
                        <div className="politicas">
                            <label><input type="checkbox" id="cbox1" value="first_checkbox" />Para continuar, este sitio recopilará información personal como nombre, indentificación, preferencias de lenguaje e imagen de perfil para fines operativos de registro y legales.Antes de utilizar este aplicativo, tú puedes revisar nuestra <Link to={this.props.politica} className="small">Politica de privacidad</Link> y <Link to={this.props.terminos} className="small">Términos y condiciones de servicio</Link>.</label>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default Formlogin;