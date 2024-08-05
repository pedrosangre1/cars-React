async function requester(method, url, data){
const options = {};

const accessToken = localStorage.getItem('accessToken');

if (accessToken){
    options.header = {
        ...options.header,
        'X-Authorization': accessToken,
    }
    
}
if (method !== 'GET') {
    options.method = method;
}
if (data){
    options.header = {
        ...options.header,
        'Conttend-Type':'application/json',
    };
    options.body = JSON.stringify(data);
}
const response = await fetch (url, options);
const result = await response.json();

if (!response.ok) throw result;

return result;
};
export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');

export default {
get,
post,
put,
del,
};