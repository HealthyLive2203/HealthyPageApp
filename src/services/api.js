const BASE_URL = import.meta.env.VITE_API_URL;

export async function getUsuarios() {
    const response = await fetch(`${BASE_URL}/usuarios`);
    return await response.json();
}