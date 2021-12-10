import React from 'react';
// import Boton from "./Componentes/Boton";

const Table = (props) => {
    const { data } = props;
    return (
        <table className="table table-bordered" id="tPredios" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Documento</th>
                    <th>Area</th>
                    <th>Area C.</th>
                    <th>Direccion</th>
                    <th>Barrio</th>
                    <th>Estrato</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Documento</th>
                    <th>Area</th>
                    <th>Area C.</th>
                    <th>Direccion</th>
                    <th>Barrio</th>
                    <th>Estrato</th>
                    <th>Acciones</th>

                </tr>
            </tfoot>
            <tbody>
                {data.map((predio, index) => {
                    return (
                        <tr key={predio.id}>
                            <td>{predio.id}</td>
                            <td>{predio.nombre}</td>
                            <td>{predio.documento}</td>
                            <td>{predio.area}</td>
                            <td>{predio.areac}</td>
                            <td>{predio.direccion}</td>
                            <td>{predio.barrio}</td>
                            <td>{predio.estrato}</td>
                            <td><button type="button" class="btn btn-primary">Editar</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}



export default Table