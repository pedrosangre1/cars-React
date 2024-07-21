import * as request from './reqwester';

const BASE_URL = 'http://localhost:3030/jsonstore/games'

export const getAll = () => request.get(BASE_URL);