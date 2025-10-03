import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/formulario.css";

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ter6lcf", // 👉 Copiar de EmailJS
        "template_lvgd3qx", // 👉 Copiar de EmailJS
        formRef.current,
        "XEG644dZlDM--Gpw4" // 👉 Copiar de EmailJS
      )
      .then(() => {
        alert("¡Consulta enviada con éxito! ✅");
        setFormData({ nombre: "", correo: "", mensaje: "" });
      })
      .catch((error) => {
        alert("Error al enviar ❌ " + error.text);
      });
  };

  return (
    <div id="contactanos">
      <h2>
        Contactanos y lleva tus <br />
        espacios verdes al siguiente nivel
      </h2>
      <form ref={formRef} className="formulario" onSubmit={handleSubmit}>
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
