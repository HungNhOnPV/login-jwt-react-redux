import axios from "axios";
import Cookie from "js-cookie";

export const userPostFetch = (user) => {
  return (dispatch) => {
    axios
      .post("https://guarded-ocean-63797.herokuapp.com/api/register", {
        // headers: {
        //   // "x-apikey": "123456789",
        //   "Access-Control-Allow-Origin": "*",
        //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        //   "Content-Type": "application/json",
        //   Accept: "application/json",
        // },
        email: user.email,
        password: user.password,
        avatar: user.avatar,
        bio: user.bio,
      })
      .then((res) => {
        Cookie.set("access_token", res.data.access_token);
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
      .post("https://guarded-ocean-63797.herokuapp.com/api/auth/login", {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        Cookie.set("access_token", res.data.access_token);
        dispatch(loginUser(res.data));
      })
      .catch((err) => {
        console.log("err:" + err);
      });
  };
};

export const userLogout = () => {
  return (dispatch) => {
    const token = Cookie.get("access_token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer${token}`;
      return axios
        .post("https://guarded-ocean-63797.herokuapp.com/api/auth/logout", {
          // token: token
        })
        .then((res) => {
          dispatch(logout());
          Cookie.remove("access_token");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
};

export const getProfileFetch = () => {
  return async (dispatch) => {
    const token = Cookie.get("access_token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer${token}`;
      const response = await axios
        .post("https://guarded-ocean-63797.herokuapp.com/api/auth/me", {
          // token: token
        })
        .catch((err) => {
          console.log(err);
          Cookie.remove("access_token");
        });
      dispatch(loginUser(response.data));
    }
  };
};

const loginUser = (userObj) => ({
  type: "LOGIN_USER",
  payload: userObj,
});

const logout = () => ({
  type: "LOGOUT_USER",
});
