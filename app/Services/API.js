import axios from "axios";
//create an axios instance for the whole application
const instance = axios.create({
  baseURL: "http://65.1.234.182/v1/",
  responseType: "json",
  timeout: 20000,
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json",
  },
});

//use axios interceptor to attach bearer token with every request
instance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("myGenieAuth")).tokenData.access.token
    }`;
    // if (token) {
    // }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(
          "http://65.1.234.182/v1/auth/refresh/",
          {
            refresh: JSON.parse(localStorage.getItem("myGenieAuth")).tokenData
              .refresh.token,
          }
        );
        console.log(response.data.data);
        // debugger
        // const newToken = {
        //   //   is_superuser:JSON.parse(localStorage.getItem("myGenieAuth")).is_superuser,
        //   //   is_teacher:JSON.parse(localStorage.getItem("myGenieAuth")).is_teacher,
        //   refresh: response.data.refresh,
        //   access: response.data.access,
        // };
        localStorage.setItem("myGenieAuth", JSON.stringify(response.data.data));
        return instance(originalRequest);
      } catch (err) {
        // Handle refresh token failure
        window.location.replace("/login");
        // localStorage.removeItem("indomieUser")
        localStorage.removeItem("myGenieAuth");
      }
    } else {
    }
    return Promise.reject(error);
  }
);

// In the above example, we create an Axios instance and add two interceptors to it. The first interceptor adds the access token to the Authorization header of each request. The second interceptor checks if the response status code is 401 (unauthorized) and if the original request has not been retried yet. If both conditions are met, it sends a request to refresh the access token using the refresh token stored in local storage. If the refresh token is valid, it updates the access token in local storage and retries the original request with the updated access token. If the refresh token is invalid or the refresh request fails for any other reason, it rejects the original request with an error.

export default instance;
