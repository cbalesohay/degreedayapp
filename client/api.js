import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
});

export const fetchData = async () => {
  try {
    const response = await instance.get('/getdata?date="2024-10-16"&species="WesternCherry"&reqData="dayDegreeDay"');
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    // Handle errors here or throw them to be handled where the function is called
    throw error;
  }
};

