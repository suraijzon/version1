import axios from "axios";

const api_url = process.env.REACT_APP_API_URL;

export async function sendEmailBanner(email, website) {
  try {
    console.log(process.env.REACT_APP_API_URL);

    const result = await axios.post(api_url + "/api/send-mail", {
      email: email,
      website: website,
    });
    return result.data;
  } catch (error) {
    return error;
  }
}
