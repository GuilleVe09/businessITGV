import { useState, useEffect } from "react";
import { apiHelper } from "../../utils/apiHelper";
import CrudTable from "../shared/CrudTable";
import GenericForm from "../shared/GenericForm";

function CustomerPage() {
    const [customers, setCustomers] = useState([]);
    const [editingCustomer, setEditingCustomer] = useState(null);

    const fetchCustomers = () => {
        apiHelper.getAll("Clientes").then(setCustomers);
    };

    useEffect(() => {
        fetchCustomers();
    }, [])

    const handleDelete = async (data) => {
        if (window.confirm("¿Está seguro de eliminar a este cliente?")) {
            await apiHelper.remove("Clientes", data.id);
            fetchCustomers();
        }
    };

    const handleSubmit = async (data) => {
        if (editingCustomer) {
            await apiHelper.update("Clientes", editingCustomer.id, data);
        } else {
            await apiHelper.create("Clientes", data);
        }
        setEditingCustomer(null);
        fetchCustomers();
    };

    return (
        <div>
            <h1>Clientes</h1>

            <div style={{ maxWidth: "80vh" }}>
                <GenericForm 
                    entity={"Cliente"}
                    fields={[
                        { name: "nombreCliente", label: "Nombre", type: "text", required: true },
                        { name: "correo", label: "Correo", type: "email", require: true },
                    ]}
                    initialData={editingCustomer}
                    onSubmit={handleSubmit}
                    onCancel={() => setEditingCustomer(null)}
                />
            </div>

            <CrudTable 
                title="Clientes"
                columns={[
                    { name: "ID", selector: (row) => row.id, sortable: true },
                    { name: "Nombre", selector: (row) => row.nombreCliente, sortable: true },
                    { name: "Correo", selector: (row) => row.correo, sortable: true },
                ]}
                data={customers}
                onEdit={setEditingCustomer}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default CustomerPage;