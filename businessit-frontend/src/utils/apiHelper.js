import {API_URL} from "../api";

export const apiHelper = {
    getAll: async (resource) => {
        const res = await fetch(`${API_URL}/${resource}`);
        return res.json();
    },
    create: async (resource, data) => {
        const res = await fetch(`${API_URL}/${resource}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return res.json();
    },
    update: async (resource, id, data) => {
        const res = await fetch(`${API_URL}/${resource}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Error actualizado");
        return;
    },
    remove: async (resource, id) => {
        return fetch(`${API_URL}/${resource}/${id}`, { method: "DELETE" });
    },
};