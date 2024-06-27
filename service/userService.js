import { NINETY_PLUS_CENTRAL } from "../utils/functions";

const login = async (email, password) => {
        
            const response = await NINETY_PLUS_CENTRAL.post('/auth/login', {email, password});
        return response.data.data
        
   
}

export default {login}