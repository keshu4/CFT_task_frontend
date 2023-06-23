import Axios from "axios";

export function UserRegisterService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: '/register',
      method: 'POST',
      data,
    };
    Axios.request(config)
      .then((response) => {
        console.log("RESPONSE-----> ", response);
        console.log("RESPONSE  DDD-----> ", response.data);
        // if(response.status !== 200) {
        //     throw new Error("Error");
        // }
        return resolve(response);
      })
      .catch((error) => {
        console.log(error);
        return reject(error);
      });
  });
}