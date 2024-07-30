import requester from "./reqwester";

const BASE_URL = 'http://localhost:3030/users';

export const login = async (email, password) => {
   const authData = await requester.post(`${BASE_URL}/login`, { email, password });
   
   return authData;
};
