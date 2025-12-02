import axios from "axios"

const Api=axios.create({
    baseURL:"https://35.233.184.130/expresscinema",
    headers: {
        "Content-Type": "application/json"
    }
})
export default Api