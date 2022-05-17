import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./modules/Header/Header";
import RobotsList from "./modules/RobotsList/RobotsList";
import { loadRobotsThunk } from "./redux/thunks/robotsThunks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <RobotsList />
    </div>
  );
}

export default App;
