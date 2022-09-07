import sendRequest  from "./send-request";

const BASE_URL = '/api/breweries';

export function getAll() {
    return sendRequest(`${BASE_URL}`);
}

export function addOne(formData) {
    return sendRequest(`${BASE_URL}`, 'POST', formData); 
}

export function updateBeenTo(id) { 
    return sendRequest(`${BASE_URL}/update/${id}`, 'PUT')
};

export function getRandomBrewery() {
    return sendRequest(`${BASE_URL}/random`)
}

export function addReview(id, formData) {
    return sendRequest(`${BASE_URL}/${id}/review`, 'POST', formData)
}

export function addRandomBrewery() {
    return sendRequest(`${BASE_URL}`, 'POST')
}
