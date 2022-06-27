// Consumindo uma API com Axios
const axios = require("axios");
const { response } = require("express");

// Forma 1 *** Sem async / await
axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log({ response: response.data });
  })
  .catch((error) => {
    console.log({ error });
  });

// Forma 2 *** Utilizando async / await
const fetchApi = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    console.log({ data });
  } catch (error) {
    console.log({ error });
  }
};

fetchApi();
