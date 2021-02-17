import React from "react";
import { useForm } from "react-hook-form";

const NuevoUsuario = ({ nuevoUsuario }) => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data, evt) => {
		nuevoUsuario(data);
		evt.target.reset();
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

				<button>Agregar Usuario</button>
			</form>
		</>
	);
};

export default NuevoUsuario;
