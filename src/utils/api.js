import { API_KEY, today } from "./constants";

const baseURL = 'https://newsapi.org/v2/everything?q='

function checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getNewsbyKeyword(keyword) {
  return fetch(baseURL + keyword + '&from=' + today + '&sortBy=popularity', {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + API_KEY
    }
  }).then(checkResponse);
}

export { getNewsbyKeyword }