import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TablaUsuario from "./components/TablaUsuario";
import NuevoUsuario from "./components/NuevoUsuario";
import ActualizarUsuario from "./components/ActualizarUsuario";

function App() {
	// Datos de los usuarios
	const datosUsuarios = [
		{
			id: uuidv4(),
			nombre: "Alex Cuenca",
			usuario: "alexpcr99",
		},
		{
			id: uuidv4(),
			nombre: "Anahi Cuenca",
			usuario: "anahimar123",
		},
		{
			id: uuidv4(),
			nombre: "Carmen Ramos",
			usuario: "carmenr1970",
		},
	];

	// State de los usuario
	const [usuarios, setUsuarios] = useState(datosUsuarios);

	// State para el form de edicion
	const [editando, setEditando] = useState(false);

	// State para el usuario actual
	const [usuarioActual, setUsuarioActual] = useState({
		id: null,
		nombre: "",
		usuario: "",
	});

	// Función para agregar un nuevo usuario
	const agregarUsuario = (usuario) => {
		usuario.id = uuidv4();
		setUsuarios([...usuarios, usuario]);
	};

	// Funcion para eliminar usuarios
	const eliminarUsuario = (id) => {
		setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
	};

	// Función para actualizar un usuario
	const actualizarUsuario = (id, usuarioActualizado) => {
		setEditando(false);
		setUsuarios(
			usuarios.map((usuario) =>
				usuario.id === id ? usuarioActualizado : usuario
			)
		);
	};

	const actualizarRegistro = (usuario) => {
		setEditando(true);
		setUsuarioActual({
			id: usuario.id,
			nombre: usuario.nombre,
			usuario: usuario.usuario,
		});
	};

	return (
		<div className="container">
			<h1>Aplicación CRUD Simple con React Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editando ? (
						<>
							<h2>Actualizar Usuario</h2>
							<ActualizarUsuario
								usuarioActual={usuarioActual}
								actualizarUsuario={actualizarUsuario}
							/>
						</>
					) : (
						<>
							<h2>Nuevo Usuario</h2>
							<NuevoUsuario agregarUsuario={agregarUsuario} />
						</>
					)}
				</div>
				<div className="flex-large">
					<h2>Ver usuarios</h2>
					<TablaUsuario
						usuarios={usuarios}
						eliminarUsuario={eliminarUsuario}
						// editarUsuario={editarUsuario}
						setEditando={setEditando}
						actualizarRegistro={actualizarRegistro}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
