import axios from "axios";
import { loadRobotsActionCreator } from "../features/robotsSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  const { data: robots } = await axios.get(
    "https://two02204-w6chwe-albert-sagol-back.onrender.com/"
  );
  dispatch(loadRobotsActionCreator(robots));
};
