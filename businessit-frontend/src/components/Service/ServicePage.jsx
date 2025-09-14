import { useEffect, useState } from "react";
import { apiHelper } from "../../utils/apiHelper";
import CrudTable from "../shared/CrudTable";
import GenericForm from "../shared/GenericForm";

function ServicePage() {
    const [services, setServices] = useState([]);
    const [editingService, setEditingService] = useState(null);

    const fetchServices = () => {
        apiHelper.getAll("Servicios").then(setServices);
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const handleDelete = async (data) => {
        if (window.confirm("¿Está seguro de eliminar este servicio?")) {
            await apiHelper.remove("Servicios", data.id);
            fetchServices();
        }
    };

    const handleSubmit = async (data) => {
        if (editingService) {
            await apiHelper.update("Servicios", editingService.id, data);
        } else {
            await apiHelper.create("Servicios", data);
        }
        setEditingService(null);
        fetchServices();
    };

    return (
        <div>
            <h1>Servicios</h1>

            <div style={{ maxWidth: "fit-content" }}>
                <GenericForm 
                    entity="Servicio"
                    fields={[
                        { name: "nombreServicio", label: "Nombre", type: "text", required: true },
                        { name: "descripcion", label: "Descripcion", type: "text", required: true },
                    ]}
                    initialData={editingService}
                    onSubmit={handleSubmit}
                    onCancel={() => setEditingService(null)}
                />
            </div>

            <CrudTable 
                title="Servicios"
                columns={[
                    { name: "ID", selector: (row) => row.id, sortable: true },
                    { name: "Nombre", selector: (row) => row.nombreServicio, sortable: true },
                    { name: "Descripcion", selector: (row) => row.descripcion, sortable: true },
                ]}
                data={services}
                onEdit={setEditingService}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default ServicePage;