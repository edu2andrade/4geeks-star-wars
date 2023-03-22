const URL_BASE = 'https://www.swapi.tech/api/';

export const getData = async (resource) => {
  try {
    const response = await fetch(`${URL_BASE}/${resource}`);
    const data = await response.json();
    return data;

  } catch (error) {
    console.log(error);
  }
}; 