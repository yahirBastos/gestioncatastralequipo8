import React from "react";


class Formcrearcuenta extends React.Component{
    enviar = (e) => {
        e.preventDefault();
        const data = {
        codigodeusuario: e.target.codigodeusuario.value,
        niveldeusuario: e.target.niveldeusuario.value,
        nombres: e.target.nombres.value,
        apellidos: e.target.apellidos.value,
        gender: e.target.gender.value,
        telefono: e.target.telefono.value,
        tipodocumento: e.target.tipodocumento.value,
        numerodocumento: e.target.numerodocumento.value,
        email: e.target.email.value,
        contrasena: e.target.contrasena.value,
        repcontrasena: e.target.repcontrasena.value,
        };
    
        this.props.procDatos(data)
    }
    render(){
        return(
            <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">{this.props.titulo} </h1>
            </div>
            <form onSubmit = {this.enviar}>
            <div class="form-group row">
                <div class="col-sm-6 ">
                    <input type="text" class="form-control form-control-user" id="examplecodigo"
                        placeholder="Código de usuario" name = {this.props.codigodeusuario}/>
                    <br />
                </div>
                <div class="col-sm-6 ">
                    <select class="form-control form-control-userselect" id="niveldeusuario" name = {this.props.niveldeusuario}>
                        <option value="choice">Nivel de Usuario</option>
                        <option value="admin">Administrador</option>
                        <option value="interno">Usuario Interno</option>
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
                        id="telefono" placeholder="Telefono" name = {this.props.telefono}/>
                    <br/>
                </div>   
                
                <div class="col-sm-6">
                        <select class="form-control form-control-userselect" id="tipodocumento" name = {this.props.tipodocumento}>
                            <option value="choice">Tipo de Documento</option>
                            <option value="cedula">Cédula de Ciudadania</option>
                            <option value="Cextranjera">Cédula Extanjera</option>
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
                        id="contrasena" placeholder="Contraseña" name = {this.props.contrasena}/>
                    <br/>
                </div> 

                <div class="col-sm-6">
                    <input type="text" class="form-control form-control-user"
                        id="repcontrasena" placeholder="Repetir Contraseña" name = {this.props.repcontrasena}/>
                    <br/>
                </div>
                <button className="btn btn-primary btn-user btn-block">{this.props.nombreboton}</button>  
                
            </div>
            </form>
            
        </div>
        )
    }
}
export default Formcrearcuenta;