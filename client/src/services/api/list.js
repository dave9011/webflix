import axios from "axios"

async function getList(params = {}) {
    return await axios.get('lists', {
        params,
    });
}

export {
    getList,
}