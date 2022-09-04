import sendRequest  from "./send-request";

const BASE_URL = '/api/breweries';

export function getAll() {
    return sendRequest(`${BASE_URL}`);
}

export function addOne(formData) {
    return sendRequest(`${BASE_URL}`, 'POST', formData); 
}

// export function updateBeenTo() { 
//     return sendRequest (`${BASE_URL}`)
// }