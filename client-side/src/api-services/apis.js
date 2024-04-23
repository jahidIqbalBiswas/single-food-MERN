import axios from 'axios';
const BASE_URL = 'https://single-food-api.vercel.app/api';
export const createFood = (postBody) => {
   return axios.post(`${BASE_URL}/create`, postBody).then((res) => {
       return res.status === 201
    }).catch((err) => {
        console.log(err);
        return false
    })
}
export const fetchFoods = () => {
    return axios(`${BASE_URL}/foods`).then((res) => {
        return res.status === 200 ? res.data : false
    }).catch((err) => {
        console.log(err);
        return false
    })
}
export const fetchFoodByID = (id) => {
    return axios(`${BASE_URL}/food/${id}`).then((res) => {
        return res.status === 200 ? res.data : false
    }).catch((err) => {
        console.log(err);
        return false
    })
}
export const updateFood = (id,postBody) => {
    return axios.put(`${BASE_URL}/update/${id}`, postBody).then((res) => {
        return res.status === 200
    }).catch((err) => {
        console.log(err);
        return false
    })
}
export const deleteFood = (id) => {
    return axios.delete(`${BASE_URL}/delete/${id}`).then((res) => {
        return res.status === 200
    }).catch((err) => {
        console.log(err);
        return false
    })
}