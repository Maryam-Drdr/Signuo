import config from "../Constant/environment"
import axios from "axios"

const usePost = () => {
    const handleClick = (endpoint, body) => {
        axios.post(`${config.baseUrl}/${endpoint}`, body)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
  return [handleClick]
}

export default usePost
