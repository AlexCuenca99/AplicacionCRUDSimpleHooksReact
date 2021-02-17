import React from "react";
import { useForm } from "react-hook-form";

const ActualizarUsuario = ({ usuarioActual, actualizarUsuario }) => {
	const { register, handleSubmit, errors, setValue } = useForm({
		defaultValues: usuarioActual,
	});

	setValue("nombre", usuarioActual.nombre);
	setValue("usuario", usuarioActual.usuario);

	const onSubmit = (data) => {
		data.id = usuarioActual.id;

		actualizarUsuario(usuarioActual.id, data);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>Nombre</label>
				<input
					name="nombre"
					type="text"
					placeholder="Ingrese el nombre"
					ref={register({
						required: { value: true, message: "Campo Requerido" },
						minLength: { value: 2, message: "Mínimo dos letras" },
					})}
				/>

				<span>{errors?.nombre?.message}</span>

				<label>Usuario</label>
				<input
					name="usuario"
					type="text"
					placeholder="Ingrese el usuario"
					ref={register({
						required: { value: true, message: "Campo Requerido" },
						minLength: { value: 2, message: "Mínimo dos letras" },
					})}
				/>

				<span>{errors?.usuario?.message}</span>

				<br />

				<button>Actualizar Usuario</button>
			</form>
		</>
	);
};

export default ActualizarUsuario;
