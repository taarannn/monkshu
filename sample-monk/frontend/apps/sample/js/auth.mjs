import { apimanager } from "/framework/js/apimanager.mjs";
import { APP_CONSTANTS } from "./constants.mjs";
export const signup = async(email,name,password) =>{
      const req = {email,name,password};

      const response = await apimanager.rest(APP_CONSTANTS.API_SIGNUP,"POST",req);
      return response;
}