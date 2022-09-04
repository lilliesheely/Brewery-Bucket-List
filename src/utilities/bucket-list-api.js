import sendRequest  from "./send-request";

const BASE_URL = '/api/breweries';

export function getAll() {
    return sendRequest(`${BASE_URL}/index`);
}

export function addOne() {
    return sendRequest (`${BASE_URL}/new`); 
}