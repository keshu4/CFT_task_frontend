import Axios from "axios";

export function UserLoginService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: '/login',
      method: 'POST',
      data,
    };
    Axios.request(config)
      .then((response) => {
        if(response.data.statusCode != "201") {
            throw new Error("Invalid Emil or Password");
        }
        return resolve(response);
      })
      .catch((error) => {
        console.log(error);
        return reject(error);
      });
  });
}