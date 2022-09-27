import { useState } from "react";

const Contact = (props) => {
    const [formValues, setFormValues] = useState({
        name: "john",
        lastName: "",
        address: ""
    });

    const handleChange = (evento) => {
        const value = evento.target.value;
        const name = evento.target.name;

        setFormValues({
            ...formValues,
            [name]: value
        })
    };

    return (
    <div>
        <form>
            <div className="formField">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} />
                <span>{formValues.name.length < 4 && "El nombre es demasiado corto."}</span>
            </div>
            <div className="formField">
                <label htmlFor="lastName">Apellido</label>
                <input type="text" id="lastName" name="lastName" value={formValues.lastName} onChange={handleChange} />
                <span>{formValues.lastName.length < 4 && "El apellido es demasiado corto."}</span>
            </div>
            <div className="formField">
                <label htmlFor="address">Dirección</label>
                <input type="text" id="address" name="address" value={formValues.address} onChange={handleChange} />
            </div>
        </form>
        <h1>{formValues.name}</h1>
    </div>
)}

export default Contact;
