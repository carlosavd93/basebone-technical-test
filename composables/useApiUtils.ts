const API_URL = "http://www.omdbapi.com/";
const API_KEY = "9e3bce1f";

export const useApiUtils = () => {
  const getShowsInfoByName = async (showToQuery: string, showType: string) => {
    const response = await $fetch(
      `${API_URL}?s=${showToQuery}&type=${showType}&apikey=${API_KEY}`,
    );
    return response.Search || [];
  };
  const getShowInfoById = async (showId: string) => {
    const response = await $fetch(`${API_URL}?i=${showId}&apikey=${API_KEY}`);
    return response || {};
  };
  return {
    getShowsInfoByName,
    getShowInfoById,
  };
};
