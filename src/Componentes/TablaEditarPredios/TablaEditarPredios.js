import React from 'react';
import Boton from '../Boton/Boton'

const TableEditEstates = (props) => {
    const { data, Editar } = props;

    const click_Editar = (e) => {
        Editar(e.target.id)
    }

    return (

        <table className="table table-bordered" id="tpredios" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Codigo predio</th>
                    <th>Nombre del propietario</th>
                    <th>Tipo Documento</th>    
                    <th>Documento</th>
                    <th>Area</th>
                    <th>Area Construida</th>
                    <th>Dirección</th>
                    <th>Barrio</th>
                    <th>Estrato</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>Codigo predio</th>
                    <th>Nombre del propietario</th>
                    <th>Tipo Documento</th>                   
                    <th>Documento</th>
                    <th>Area</th>
                    <th>Area Construida</th>
                    <th>Dirección</th>
                    <th>Barrio</th>
                    <th>Estrato</th>
                    <th>Acciones</th>
                </tr>
            </tfoot>
            <tbody>

                {data.map((estate, index) => {
                    return (
                        <tr key={estate._id}>
                            <td>{estate._id}</td>
                            <td>{estate.nombre}</td>
                            <td>{estate.tipodocumento}</td>
                            <td>{estate.documento}</td>
                            <td>{estate.area}</td>
                            <td>{estate.areac}</td>
                            <td>{estate.direccion}</td>
                            <td>{estate.barrio}</td>
                            <td>{estate.estrato}</td>
                            <td><button id={estate._id}className="btn btn-primary btn-user btn-block" onClick={click_Editar}>Editar</button></td>
                        </tr>
                    );
                })}


            </tbody>

        </table>
    );
}

export default TableEditEstates