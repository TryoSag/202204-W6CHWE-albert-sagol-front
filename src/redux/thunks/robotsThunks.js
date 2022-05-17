import axios from "axios";
import { loadRobotsActionCreator } from "../features/robotsSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  const response = await axios.get(`${process.env.REACT_APP_API}/robots`, {
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    },
  });

  dispatch(loadRobotsActionCreator(response.data.robots));
};
