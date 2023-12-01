// apiService.js

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getProducts = async page => {
  console.log('base url ', process.env, process.env.REACT_APP_TITLE);
  try {
    const response = await fetch(`${BASE_URL}/products/?page=${page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
