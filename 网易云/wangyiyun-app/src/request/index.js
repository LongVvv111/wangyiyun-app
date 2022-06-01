import axios from "axios";
let serivce=axios.create({
    baseURL:"http://localhost:3000/",
    timeout:3000,
})
export default serivce