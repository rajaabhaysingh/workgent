import axiosInstance from "../../../helpers/axios";

export default () => {
  axiosInstance
    .get("/jobs/my/")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
