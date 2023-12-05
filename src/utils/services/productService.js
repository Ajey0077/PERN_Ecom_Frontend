const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getSingleProduct = async id => {
  try {
    const url = `${BASE_URL}/products/${id}`;

    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
