import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import ClientPage from "./Customer/CustomerPage";
import ServicePage from "./Service/ServicePage";

export default function MainPage() {
    const [tab, setTab] = useState(0);

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Tabs value={tab} onChange={handleChange}>
                <Tab label="Clientes" />
                <Tab label="Servicios" />
            </Tabs>

            <Box sx={{ p: 2 }}>
                {tab === 0 && <ClientPage />}
                {tab === 1 && <ServicePage />}
            </Box>
        </Box>
    );
}