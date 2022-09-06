import sendRequest  from "./send-request";

const BASE_URL = '/api/breweries';

export function getAll() {
    return sendRequest(`${BASE_URL}`);
}

export function addOne(formData) {
    return sendRequest(`${BASE_URL}`, 'POST', formData); 
}

export function updateBeenTo(data) { 
    return sendRequest(`${BASE_URL}`, 'PUT', data)
};

export function getRandomBrewery() {
    return sendRequest(`${BASE_URL}/random`)
}

// export function getBreweryByCity() {
//     return sendRequest(`${BASE_URL}/city`)
// }