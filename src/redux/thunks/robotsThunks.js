import axios from "axios";
import { loadRobotsActionCreator } from "../features/robotsSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  const { data: robots } = await axios.get(
    "https://two02204-w6chwe-albert-sagol-back.onrender.com/",
    {
      header: {
        authoritzation:
          "Bearer 5E884898DA28047151D0E56F8DC6292773603D0D6AABBDD62A11EF721D1542D8",
      },
    }
  );

  dispatch(loadRobotsActionCreator(robots));
};
