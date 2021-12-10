import React from 'react';
// import Boton from "./Componentes/Boton";

const Table = (props) => {
    const { data } = props;
    return (
        <table className="table table-bordered" id="tusuarios" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Elegir</th>
                    <th>N</th>
                    <th>Codigo Catastral</th>
                    <th>Area total</th>
                    <th>Area construida</th>
                    <th>Direccion</th>
                    <th>Barrio</th>
                    <th>Estrato</th>

                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>Elegir</th>
                    <th>N</th>
                    <th>Codigo Catastral</th>
                    <th>Area total</th>
                    <th>Area construida</th>
                    <th>Direccion</th>
                    <th>Barrio</th>
                    <th>Estrato</th>
                </tr>
            </tfoot>
            <tbody>
                {data.map((pago, index) => {
                    return (
                        <tr key={pago.N}>
                            <td><input type="checkbox" name="seleccion" id="seleccion" /></td>
                            <td>{pago.N}</td>
                            <td>{pago.codigocatastral}</td>
                            <td>{pago.areatotal}</td>
                            <td>{pago.areaconstruida}</td>
                            <td>{pago.direccion}</td>
                            <td>{pago.barrio}</td>
                            <td>{pago.estrato}</td>

                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}



export default Table