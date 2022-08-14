import axios from "axios"

async function getById(id) {
    return await axios.get(`movies/find/${id}`);
}

async function getRandom(type) {
    return await axios.get('movies/random', {
        params: {
            type,
        }
    });
}

export {
    getById,
    getRandom,
}