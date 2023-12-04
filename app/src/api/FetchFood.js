// Fetch food data
const BASE_URL = 'http://localhost:9000';

export const fetchFoodData = async () => {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
