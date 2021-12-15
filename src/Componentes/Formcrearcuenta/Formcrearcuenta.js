import React from "react";


class Formcrearcuenta extends React.Component{
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
                    <input readonly="readonly" type="text" class="form-control form-control-user" id="examplecodigo"
                        placeholder="Código de usuario" name = {this.props.codigodeusuario} value={this.props.value_id}/>
                    <br />
                </div>
                <div class="col-sm-6 ">
                    <select class="form-control form-control-userselect" id="nivel" name = {this.props.niveldeusuario} value={this.props.value_nivel}>
                        <option value="choice">Nivel de Usuario</option>
                        <option value="admin">Administrador</option>
                        <option value="interno">Usuario Interno</option>
                    </select>
                </div>

                <div class="col-sm-6 ">
                    <input type="text" class="form-control form-control-user" id="exampleNombres"
                        placeholder="Nombres" name = {this.props.nombres} value={this.props.value_nombre}/>
                    <br />
                </div>

                <div class="col-sm-6 ">
                    <input type="text" class="form-control form-control-user" id="exampleApellidos"
                        placeholder="Apellidos" name = {this.props.apellidos} value={this.props.value_apellido}/>
                    <br />
                </div>

                <div class="col-sm-6 ">
                    <select class="form-control form-control-userselect" id="gender" name = {this.props.gender} value={this.props.value_gender}>
                        <option value="choice">Sexo</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                </div>

                <div class="col-sm-6">
                    <input type="text" class="form-control form-control-user"
                        id="telefono" placeholder="Telefono" name = {this.props.telefono} value={this.props.value_telefono}/>
                    <br/>
                </div>   
                
                <div class="col-sm-6">
                        <select class="form-control form-control-userselect" id="tipodocumento" name = {this.props.tipodocumento} value={this.props.value_tipodoc}>
                            <option value="choice">Tipo de Documento</option>
                            <option value="cedula">Cédula de Ciudadania</option>
                            <option value="Cextranjera">Cédula Extanjera</option>
                            <option value="Otro">Pasaporte</option>
                        </select>
                        <br />
                </div>

                <div class="col-sm-6">
                    <input type="text" class="form-control form-control-user"
                        id="examplebarrio" placeholder="Número de Documento" name = {this.props.numerodocumento} value={this.props.value_documento}/>
                    <br/>
                </div>  

                <div class="form-group">
                        <input type="email" class="form-control form-control-user" id="exampleemail"
                            placeholder="Correo Electronico" name = {this.props.email} value={this.props.value_email}/>
                </div>

                <div class="col-sm-6">
                    <input type="text" class="form-control form-control-user"
                        id="contrasena" placeholder="Contraseña" name = {this.props.contrasena} value={this.props.value_contrasena}/>
                    <br/>
                </div> 

                <div class="col-sm-6">
                    <input type="text" class="form-control form-control-user"
                        id="repcontrasena" placeholder="Repetir Contraseña" name = {this.props.repcontrasena} value={this.props.value_repcontrasena}/>
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