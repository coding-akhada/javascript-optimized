async function fetchApi(URL) {
  try {
    const data = await fetch(URL);
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

export default fetchApi;
