const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getProducts = async payload => {
  try {
    const queryParams = new URLSearchParams();

    if (payload?.page) {
      queryParams.set('page', payload.page);
    }

    if (payload?.searchText) {
      queryParams.set('searchText', payload.searchText);
    }

    if (payload?.filter) {
      queryParams.set('filter', payload.filter);
    }

    const url = `${BASE_URL}/products${
      queryParams.toString() ? `?${queryParams.toString()}` : ''
    }`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
