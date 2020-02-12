import axios from "axios";
// const URL = "http://localhost:8080"
const URL = "https://joesreactzoo-api.herokuapp.com"

const API = {
    getAllAnimals: ()=>{
        return axios.get(`${URL}/api/animals`)
    },
    getAllByClass: (className)=>{
        return axios.get(`${URL}/api/animals/class/${className}`)
    }
    
}

export default API