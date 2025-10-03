import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+59894118686" // 👈 poné tu número acá (con código de país, sin + ni 0)
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
        zIndex: 1000,
        transition: "transform 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: "35px", height: "35px" }}
      />{" "}
    </a>
  );
};

export default WhatsAppButton;
