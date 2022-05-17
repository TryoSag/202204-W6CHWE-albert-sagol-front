import axios from "axios";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "../features/usersSlice";

const loginThunk = (userData) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API}/login`;

  const { data } = await axios.post(url, userData);

  const userInfo = jwtDecode(data.token);

  localStorage.setItem("token", data.token);

  dispatch(loginActionCreator(userInfo));
};
export default loginThunk;
