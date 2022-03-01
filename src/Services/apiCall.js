// all api call functions defined here....
import axios from "axios";
import {authorizationToken} from './../Comman/staticData'

const header = {
  "Content-Type": "application/json",
  Authorization:  authorizationToken, // PAT token for authentication 
};

const postRequest = async (apiUrl, query) => {
  let response = await axios.post(
    apiUrl,
    {
      query: query,
    },
    {
      headers: header,
    }
  );
  if (response.status === 200) {
    return response.data;
  } else {
    return response.status;
  }
};

const getRequest = async (apiUrl) => {
  let response = await axios.get(apiUrl, {
    headers: header,
  });
  return response.data;
};

export { postRequest, getRequest };
