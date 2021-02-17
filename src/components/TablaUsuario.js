import React from "react";

const TablaUsuario = ({ usuarios, eliminarUsuario, actualizarRegistro }) => {
	// console.log(usuarios);
	return (
		<table>
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Nombre de Usuario</th>
					<th>Acciones</th>
				</tr>
			</thead>

			<tbody>
				{usuarios.length > 0 ? (
					usuarios.map((usuario) => {
						return (
							<tr key={usuario.id}>
								<td>{usuario.nombre}</td>
								<td>{usuario.usuario}</td>
								<td>
									<button
										className="button muted-button"
										onClick={() => {
											actualizarRegistro(usuario);
										}}
									>
										Editar
									</button>
									<button
										className="button muted-button"
										onClick={() =>
											eliminarUsuario(usuario.id)
										}
									>
										Eliminar
									</button>
								</td>
							</tr>
						);
					})
				) : (
					<tr>
						<td colSpan={3}>Aún no hay usuarios</td>
					</tr>
				)}
			</tbody>
		</table>
	);
};

export default TablaUsuario;
