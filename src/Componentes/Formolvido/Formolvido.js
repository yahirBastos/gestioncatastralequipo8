import React from "react";
import { Link } from "react-router-dom";

class Formolvido extends React.Component {
    render() {
        return (
            <>
                <div className="col-lg-6 d-none d-lg-block bg-password-image"></div><div className="col-lg-6">
                    <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-2">Olvidaste tu contraseña?</h1>
                            <p className="mb-4">Lo entendemos, pasan cosas. Sólo tienes que introducir tu dirección de correo electrónico a continuación
                                ¡y le enviaremos un enlace para restablecer su contraseña!</p>
                        </div>
                        <form className="user">
                            <div className="form-group">
                                <input type="email" className="form-control form-control-user"
                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                    placeholder="Digite el correo electronico..." name = {this.props.email}/>
                            </div>
                            <Link to={this.props.linkolvido} className="btn btn-primary btn-user btn-block">Restablecer Contraseña</Link>
                        </form>
                        <hr />
                        <div class="text-center">
                            <Link to={this.props.linkregister} className="small">Crear Nueva Cuenta</Link>
                        </div>
                        <div class="text-center">
                            <Link to={this.props.linklogin} className="small">Ya tengo una cuenta</Link>
                        </div>
                        <br/>
                        <div className="politicas">
                            <label><input type="checkbox" id="cbox1" value="first_checkbox" />Para continuar, este sitio recopilará información personal como nombre, indentificación, preferencias de lenguaje e imagen de perfil para fines operativos de registro y legales.Antes de utilizar este aplicativo, tú puedes revisar nuestra <Link to={this.props.politica} className="small">Politica de privacidad</Link> y <Link to={this.props.terminos} className="small">Términos y condiciones de servicio</Link>.</label>
                        </div>
                    </div>
                </div>
            </>






        )
    }
}

export default Formolvido;