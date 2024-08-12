const getShowsInfo = async (showToQuery: string) => {
  if (showToQuery.length < 1) return [];
  const response = await fetch(
    `http://www.omdbapi.com/?s=${showToQuery}&type=movie&apikey=9e3bce1f`,
  );
  const data = await response.json();
  return data.Search || [];
};

export default getShowsInfo;
