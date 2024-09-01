import reqwester from "./reqwester";

const BASE_URL = `http://localhost:3030/data/carItems`

const create =  (carId, carsItems) => reqwester.post(BASE_URL,{carId, carsItems}); 

const getAll =  (carId) =>  {
    const params = new URLSearchParams ({
        where: `carId="${carId}"`,
        load: `author=_ownerId:users`,
    });
  return   reqwester.get(`${BASE_URL}?${params.toString()}`);
}
    

const caritemsAPI = {
    create,
    getAll,
}

export default caritemsAPI;