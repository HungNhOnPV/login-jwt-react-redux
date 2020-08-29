import axios from "axios";

export const userPostFetch = (user) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8000/auth/register", {
        headers: {
          "x-apikey": "123456789",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        email: user.email,
        password: user.password,
        avatar: user.avatar,
        bio: user.bio,
      })
      .then((res) => {
        console.log(res);
        document.cookie = `token=${res.data.access_token}`;
        dispatch(loginUser(res.user));
      })
      .catch((err) => {
        console.log("err:" + err);
      });
  };
};

export const userLoginFetch = (user) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8000/auth/login", {
        headers: {
          "x-apikey": "123456789",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        console.log(res);
        document.cookie = `token=${res.data.access_token}`;
        dispatch(loginUser(res.user));
      })
      .catch((err) => {
        console.log("err:" + err);
      });
  };
};

export const getProfileFetch = () => {
  return (dispatch) => {
    const token = document.cookie;
    if (token) {
      return axios
        .post("http://localhost:8000", {
          headers: {
            "x-apikey": "123456789",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.message) {
            document.cookie = "token=";
          } else {
            dispatch(loginUser(res.user));
          }
          dispatch(loginUser(res.user));
        })
        .catch((err) => {
          console.log("err:" + err);
        });
    }
  };
};

const loginUser = (userObj) => ({
  type: "LOGIN_USER",
  payload: userObj,
});
