import React from "react";



class Formcrearpredio extends React.Component {
    enviar = (e) => {
        e.preventDefault();
        const data = {
            nombre: e.target.nombre.value,
            tipodocumento: e.target.tipodocumento.value,
            documento: e.target.documento.value,
            area: e.target.area.value,
            areac: e.target.areac.value,
            direccion: e.target.direccion.value,
            barrio: e.target.barrio.value,
            estrato: e.target.estrato.value,
        };

        this.props.procDatos(data)
    }

    render() {
        return (
            <div className="container-fluid">
                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">{this.props.titulo}</h1>
                </div>
                <form onSubmit={this.enviar}>
                    <div class="form-group row">
                        <div class="form-group">
                            <input type="text" class="form-control form-control-user" id="codigopredio"
                                placeholder="Código del Predio" name={this.props.codigopredio} />
                        </div>

                        <div class="form-group">
                            <input type="text" class="form-control form-control-user" id="nombre"
                                placeholder="Nombre del Propietario" name={this.props.nombre} />
                        </div>

                        <div class="col-sm-6">
                            <select class="form-control form-control-userselect" id="tipodocumento" name={this.props.tipodocumento}>
                                <option value="choice">Tipo de Documento</option>
                                <option value="Cedula">Cédula de Ciudadania</option>
                                <option value="Extrajera">Cédula Extanjera</option>
                                <option value="Otro">Pasaporte</option>
                            </select>
                            <br />

                        </div>
                        <div class="col-sm-6 ">
                            <input type="text" class="form-control form-control-user" id="documento"
                                placeholder="Número de Documento" name={this.props.numerodocumento} />
                            <br />
                        </div>

                        <div class="col-sm-6 mb-3 mb-sm-0">
                            <input type="text" class="form-control form-control-user"
                                id="area" placeholder="Área Total del Predio" name={this.props.areatotal} />
                        </div>

                        <div class="col-sm-6">
                            <input type="text" class="form-control form-control-user"
                                id="areac" placeholder="Área Construida del Predio" name={this.props.areaconstruida} />
                            <br />
                        </div>

                        <div class="col-sm-6 mb-3 mb-sm-0">
                            <input type="text" class="form-control form-control-user"
                                id="direccion" placeholder="Dirección" name={this.props.direccion} />
                        </div>

                        <div class="col-sm-6">
                            <input type="text" class="form-control form-control-user"
                                id="barrio" placeholder="Barrio" name={this.props.barrio} />
                            <br />
                        </div>

                        <div class="col-sm-6 mb-3 mb-sm-0">
                            <input type="text" class="form-control form-control-user"
                                id="estrato" placeholder="Estrato" name={this.props.estrato} />
                            <br />
                        </div>
                        <button className="btn btn-primary btn-user btn-block">{this.props.nombreboton}</button>
                    </div>

                </form>

            </div>
        );
    }
}

export default Formcrearpredio;