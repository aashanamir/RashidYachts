import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL } from "../API/Baseurl";
import { toast } from "react-toastify";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userStatus: "pre",
    userData: null,
  },
  reducers: {
    setStatus: (state, action) => {
      state.userStatus = action.payload;
    },
    setUser: (state, action) => {
      state.userData = action.payload;
    },
  }
});

export const { setStatus, setUser } = userSlice.actions;
export default userSlice.reducer;

// Thunks
export function LogInUser(email, password) {
  console.log(email, password);
  return async function LogInUserThunk(dispatch) {
    dispatch(setStatus("loading"));
    try {
      const { data } = await axios.post(BASEURL + "user/login", {
        email, password
      }, {
        headers: {
          "Content-Type": "application/json",
        }, withCredentials: true,
      });

      dispatch(setUser(data));
      dispatch(setStatus("idle"));
    } catch (error) {
      console.log(error);
      dispatch(setStatus("error"));
      toast.error(error.response.data.message);
    }
  }
}

export function fetchUser() {
  return async function fetchUserThunk(dispatch) {
    dispatch(setStatus("loading"));
    try {
      const { data } = await axios.get(BASEURL + "user/me", {
        withCredentials: true,
      });

      dispatch(setUser(data));
      dispatch(setStatus("idle"));
    } catch (error) {
      console.log(error);
      dispatch(setStatus("error"));
    }
  }
}
