import reqwester from "./reqwester";

const BASE_URL = `http://localhost:3030/data/carItems`

const create = async (carId, username, text) => reqwester.post(buildUrl(carId),{username, text}); 

const getAll = async (carId) => {
    const result = await reqwester.get(buildUrl(carId));
    
    const carItems = Object.values(result);
return carItems;
}

const caritemsAPI = {
    create,
    getAll,
}

export default caritemsAPI;