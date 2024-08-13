export const useApiUtils = () => {
  const getShowsInfoByName = async (showToQuery: string, showType: string) => {
    const response = await $fetch(
      `http://www.omdbapi.com/?s=${showToQuery}&type=${showType}&apikey=9e3bce1f`,
    );
    return response.Search || [];
  };
  const getShowInfoById = async (showId: string) => {
    const response = await $fetch(
      `http://www.omdbapi.com/?i=${showId}&apikey=9e3bce1f`,
    );
    return response || {};
  };
  return {
    getShowsInfoByName,
    getShowInfoById,
  };
};
