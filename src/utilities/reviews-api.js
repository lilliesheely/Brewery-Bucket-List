import sendRequest  from "./send-request";

const BASE_URL = '/api/breweries';

export function addReview(id, review) {
    return sendRequest(`${BASE_URL}/${id}/reviews`, 'POST', review)
}