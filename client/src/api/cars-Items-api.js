import reqwester from "./reqwester";

const BASE_URL = `http://localhost:3030/data/carItems`

const create =  (carId, text) => reqwester.post(BASE_URL,{carId, text}); 

const getAll =  (carId) =>  {
    const params = new URLSearchParams ({
        where: `carId="${carId}"`
    });
  return   reqwester.get(`${BASE_URL}?${params.toString()}`);
}
    

const caritemsAPI = {
    create,
    getAll,
}

export default caritemsAPI;