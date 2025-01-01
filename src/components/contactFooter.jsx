import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactFooter = () => {
    const [footerEmail, setFooterEmail] = useState("");

    const handleFooterEmailChange = (e) => {
        setFooterEmail(e.target.value);
    };

    const sendFooterEmail = (e) => {
        e.preventDefault();
        if (!/\S+@\S+\.\S+/.test(footerEmail)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        const footerData = {
            email: footerEmail,
            message: "El usuario ha dejado su correo para contacto."
        };

        emailjs.send("service_edviazi", "template_zdazbp6", footerData, "LU5gOD-hLVzOGFEMt")
            .then((response) => {
                console.log("Éxito!", response.status, response.text);
                alert("¡Tu correo ha sido enviado correctamente!");
                setFooterEmail(""); // Limpiar el input después de enviar
            }, (err) => {
                console.log("Falló...", err);
            });
    };

    return (
        <div className="contactFooterContainer">
            <div className="contactItemFooterContainer">
                <h3>Quick Contact!</h3>
                <p>                            
                    Have a question or want to get in touch? <br />
                    Just drop your email below, and I'll get back to you as soon as possible!
                </p>
                <form className="formulary" onSubmit={sendFooterEmail}>
                    <div className="contactFooterItem">
                        <input
                            type="email"
                            value={footerEmail}
                            onChange={handleFooterEmailChange}
                            placeholder="Enter your Email..."
                        />
                        <button className="sendContactFooterButton" type="submit">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactFooter;