import { useState, useEffect } from "react";
import "../../styles/styles.css"

function GenericForm({ entity, fields, onSubmit, initialData, onCancel }) {
    const [form, setForm] = useState({});

    useEffect(() => {
        setForm(initialData || {});
    }, [initialData]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);

        if (!initialData) {
            setForm({});
        }
    };

    return (
        <form 
            onSubmit={handleSubmit}
            style={{ 
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                backgroundColor: "black",
                padding: "1rem",
                borderRadius: "10px",
                alignItems: "center"
            }}>
            {fields.map((f) => (
                <input 
                    key={f.name}
                    type={f.type}
                    name={f.name}
                    placeholder={f.label}
                    value={form[f.name] || ""}
                    onChange={handleChange}
                    required={f.required}
                />
            ))}
            <button type="submit" className="common_button">
                {initialData ? `Actualizar ${entity}` : `Agregar ${entity}`}
            </button>
            {initialData && (
                <button
                    type="button"
                    className="common_button"
                    onClick={() => onCancel()}
                >
                    Cancelar
                </button>
            )}
        </form>
    );
}

export default GenericForm;