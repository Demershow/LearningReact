import axios from 'axios'

const URL = "http://localhost:3004/api/todos";

export const changeDescription = (event) => ({
  type: "DESCRIPTION_CHANGE",
  payload: event.target.value,
});

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCH',
        payload: request
    }
}