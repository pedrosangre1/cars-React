import * as request from './reqwester';

const BASE_URL = 'http://localhost:3030/data/cars'

export const getAll = async() => {
    const result = await request.get(BASE_URL);
    
    const cars = Object.values(result);
    
    return cars;
};

export const getOne = (carsId) => request.get(`${BASE_URL}/${carsId}`);

export const create = (carData) => request.post(`${BASE_URL}`, carData);

const carsAPI ={
    getAll,
    getOne,
    create,
};

export default carsAPI;