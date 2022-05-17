import axios from "axios";
import { loadRobotsActionCreator } from "../features/robotsSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  const { data: robots } = await axios.get(`${process.env.API_STRING}/robots`, {
    headers: {
      authorization: `Bearer ${process.env.TOKEN_STRING}`,
    },
  });

  dispatch(loadRobotsActionCreator(robots));
};
