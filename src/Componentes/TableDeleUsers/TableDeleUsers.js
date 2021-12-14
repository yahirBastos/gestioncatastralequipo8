import React from 'react';

const TableDeleUsers = (props) => {
    const { data, Eliminar } = props;

    const click_deleteuser = (e) => {
        Eliminar(e.target.id)
    }

    return (
        <table className="table table-bordered" id="tusers" width="100%" cellspacing="0">
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
                        <tr key={user.codigo}>
                            <td>{user._id}</td>
                            <td>{user.nivel}</td>
                            <td>{user.nombre}</td>
                            <td>{user.apellido}</td>
                            <td>{user.telefono}</td>
                            <td>{user.documento}</td>
                            <td>{user.email}</td>
                            <td>{user.contrasena}</td>
                            <td><button id={user._id}className="btn btn-primary btn-user btn-block" onClick={click_deleteuser}>Eliminar</button></td>
                        </tr>
                    );
                })}


            </tbody>

        </table>
    );
}

export default TableDeleUsers