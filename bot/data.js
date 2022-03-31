const axios = require("axios");

function getData() {
  axios
    .get("http://localhost:8000/notifications")
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { getData };
