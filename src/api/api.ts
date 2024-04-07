import axios from "axios";

const BASE_URL = "https://bootcamp-api.codeit.kr";

async function getAPI(query: string) {
  const response = await axios
    .get(`${BASE_URL}${query}`)
    .then((res) => res.data);

  return response;
}

export const sampleUserData = () => {
  return getAPI("/api/sample/user");
};

export const getSampleData = () => {
  return getAPI("/api/sample/folder");
};
