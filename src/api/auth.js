import { API_HOST } from "../utils/constants";

// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';


export async function getToken(username, password) {
  const url = `${API_HOST}login`

  const formData = new URLSearchParams();
  formData.append('username', username);
  formData.append('password', password);

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json'
    },
    body: formData.toString()
  }
  
  try {
    const response = await fetch(url, config)
    const result = await response.json()
    return result
  } catch (error) {
    alert(error)
    throw error;
  }
}
