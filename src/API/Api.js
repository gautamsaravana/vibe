import axios from "axios"

const Api=axios.create({
    baseURL:"http://16.176.23.221/expresscinema/",
    headers: {
        "Content-Type": "application/json"
    }
})
export default Api
