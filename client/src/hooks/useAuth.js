import {login} from "../api/auth-api";

export const useLogin = () => {
    const lodinHandler = async (email, password) => {
   
     const result = await login(email, password);
       // console.log(result)
        // TODO: update app stage
  
}
    return lodinHandler;

    
};