import DataTable from "react-data-table-component";
import "../../styles/styles.css"

function CrudTable({ title, columns, data, onEdit, onDelete }) {
    const enhancedColumns = [
        ...columns,
        {
            name: "Acciones",
            cell: (row) => (
                <>
                    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                        <button className="common_button" onClick={() => onEdit(row)}>Editar</button>
                        <button className="common_button" onClick={() => onDelete(row)}>Eliminar</button>
                    </div>
                    
                </>
            ),
        },
    ];

    return (
        <div>
            <h2>{title}</h2>
            <DataTable 
                columns={enhancedColumns}
                data={data}
                pagination
            />
        </div>
    );
}

export default CrudTable;