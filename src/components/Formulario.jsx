import { useState } from "react";
import "../styles/formulario.css";

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Acá podrías integrar con un servicio externo
    console.log("Consulta enviada:", formData);

    alert("¡Consulta enviada con éxito!");
    setFormData({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <div id="contactanos">
      <h2>
        Contactanos y lleva tus <br />
        espacios verdes al siguiente nivel
      </h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label>Correo electrónico</label>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />

        <label>Mensaje</label>
        <textarea
          name="mensaje"
          rows="5"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
