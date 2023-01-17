import { API_HOST} from "../utils/constants";

export async function sendImageB64(image_str, token) {
  const url = `${API_HOST}image/send`

  const config = {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'text/plain',
    },
    body: image_str
  }

  try {
      let response = await fetch(url, config)
      let res = await response.json()
      return res
  } catch (error) {
    return error
  }

}