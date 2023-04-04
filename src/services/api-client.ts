import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'da304090734b45c2be90f659b9e815e5',
    }
})