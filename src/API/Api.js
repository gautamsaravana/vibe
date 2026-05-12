import axios from "axios"

const Api=axios.create({
    baseURL:"http://3.106.195.82/expresscinema/",
    headers: {
        "Content-Type": "application/json"
    }
})
export default Api
