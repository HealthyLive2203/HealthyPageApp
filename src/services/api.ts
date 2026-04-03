const BASE_URL = "http://localhost:5153"; // Puerto de tu backend

export async function getUsuarios() {
    const response = await fetch(`${BASE_URL}/usuarios`);
    return await response.json();
}