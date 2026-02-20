import axios from "axios";

const api_url = process.env.REACT_APP_API_URL;

export async function sendEmailBanner(data) {
  try {
    console.log(process.env.REACT_APP_API_URL);

    const result = await axios.post(api_url + "/api/public/send-mail", data);
    return result.data;
  } catch (error) {
    return error;
  }
}
