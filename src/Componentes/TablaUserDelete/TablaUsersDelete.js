import React from 'react';
// import Boton from "./Componentes/Boton";

const Table = (props) => {
    const { data } = props;
    return (
        <table className="table table-bordered" id="tusuarios" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nivel</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Telefono</th>
                    <th>Documento</th>
                    <th>Correo Electronico</th>
                    <th>Contraseña</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>Codigo</th>
                    <th>Nivel</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Telefono</th>
                    <th>Documento</th>
                    <th>Correo Electronico</th>
                    <th>Contraseña</th>
                    <th>Acciones</th>
                </tr>
            </tfoot>
            <tbody>
                {data.map((user, index) => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nivel}</td>
                            <td>{user.nombre}</td>
                            <td>{user.apellido}</td>
                            <td>{user.telefono}</td>
                            <td>{user.documento}</td>
                            <td>{user.email}</td>
                            <td>{user.contrasena}</td>
                            <td><button type="button" class="btn btn-primary">Eliminar</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}



export default Table