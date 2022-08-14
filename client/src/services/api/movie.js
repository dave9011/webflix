import axios from "axios"

async function getById(id) {
    return await axios.get(`movies/find/${id}`);
}

export {
    getById,
}