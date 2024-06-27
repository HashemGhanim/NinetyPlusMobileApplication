import { NINETY_PLUS_CENTRAL } from "../utils/functions";

const login = async (email, password) => {
  try{
    const response = await NINETY_PLUS_CENTRAL.post("/auth/login", {
      email,
      password,
    });
    return response.data.data;
  }
  catch(e){
    console.log(e);
  }
};

const logout = async (token) => {
  const response = await NINETY_PLUS_CENTRAL.post("/auth/logout",{}, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  console.log(response.status);
  return response.status;
};

export default { login, logout };
