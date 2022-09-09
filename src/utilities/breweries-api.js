import sendRequest  from "./send-request";

const BASE_URL = '/api/breweries';

export function getAll() {
    return sendRequest(`${BASE_URL}`);
}

export function addOne(formData) {
    return sendRequest(`${BASE_URL}`, 'POST', formData); 
}

export function updateBeenTo(id, formData) { 
    return sendRequest(`${BASE_URL}/update/${id}`, 'PUT', formData)
};

export function getRandomBrewery() {
    return sendRequest(`${BASE_URL}/random`)
}

export function addRandomBrewery() {
    return sendRequest(`${BASE_URL}`, 'POST')
}

export function deleteBrewery(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

export function getBreweriesByCity(formData) {
    return sendRequest(`${BASE_URL}/city`, formData)
}