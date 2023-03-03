/* API */

import axios from "axios";
/* 크로스 도메인 허용 */
axios.defaults.withCredentials = true;

/* HTTP GET */
export async function GetData(param: string) {
  const response = await axios.get<IData>("http://localhost:8080/");
  console.log(response.data);

  return response.data;
}

/* HTTP POST */
export async function PostData() {
  const sample = { id: "", title: "", content: "", email: "" };
  const response = await axios
    .post<IData>("http://localhost:8080/", sample)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
}

/* HTTP PUT */
export async function PutData() {
  const sample = { id: "", title: "", content: "", email: "" };
  const response = await axios
    .put<IData>("http://localhost:8080/", sample)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return response;
}

/* HTTP DELETE */
export async function DeleteData() {
  const response = await axios
    .delete("http://localhost:8080/")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  return response;
}

export interface IData {
  id: string;
  title: string;
  content: string;
  email: string;
}
