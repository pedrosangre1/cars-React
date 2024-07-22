import * as request from './reqwester';

const BASE_URL = 'http://localhost:3030/jsonstore/cars'

export const getAll = async() => {
    const result = await request.get(BASE_URL);
    
    const cars = Object.values(result);
    
    return cars;
};

export const getOne = (carsId) => request.get(`${BASE_URL}/${carsId}`);

const carsAPI ={
    getAll,
    getOne,
};

export default carsAPI;