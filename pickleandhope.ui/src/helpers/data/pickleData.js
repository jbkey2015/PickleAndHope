import axios from "axios";

const getPickles = () => new Promise((resolve, reject) => {
  axios.get("https://localhost:44310/api/pickles")
  .then((result) => resolve(result.data))
  .catch(error => reject(error));
  });

export {getPickles};