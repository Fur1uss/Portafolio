import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "El nombre es requerido.";
        if (!formData.email) {
            newErrors.email = "El correo es requerido.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "El correo no es válido.";
        }
        if (!formData.subject) newErrors.subject = "El asunto es requerido.";
        if (!formData.message) newErrors.message = "El mensaje es requerido.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            sendEmail(formData);
        }
    };

    const sendEmail = (data) => {
        emailjs.send("service_edviazi", "template_zdazbp6", data, "LU5gOD-hLVzOGFEMt")
            .then((response) => {
                console.log("Éxito!", response.status, response.text);
                // Mostrar alerta de éxito
                alert("¡Mensaje enviado correctamente!");
                // Limpiar el formulario después de enviar
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });
            }, (err) => {
                console.log("Falló...", err);
            });
    };

    return (
        <div className="contactForumContainer">
            <div className="contactForumItem">
                <form className="formulary" onSubmit={handleSubmit}>
                    <div className="contactFirstItemsContainer">
                        <h3 className="InputText">Full Name</h3>
                        <input
                            className="inputItem"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                        
                        <h3 className="InputText">Email Address</h3>
                        <input
                            className="inputItem"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="contactFirstItemsContainer contactSecondItemsContainer">
                        <h3 className="InputText">Subject/Project</h3>
                        <input
                            className="inputItem input02"
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                        {errors.subject && <p className="error">{errors.subject}</p>}
                    </div>

                    <div className="contactFirstItemsContainer">
                        <h3 className="InputText">Message</h3>
                        <textarea
                            className="inputItem input03"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && <p className="error">{errors.message}</p>}
                    </div>

                    <button className="contactSendButton" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}