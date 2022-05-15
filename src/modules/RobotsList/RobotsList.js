import { useSelector } from "react-redux";
import Robot from "../Robot/Robot";

const RobotsList = () => {
  const robots = useSelector((state) => state.robots);

  return robots.length !== 0 ? (
    <ul>
      {robots.map((robot) => {
        return (
          <li key={robot.id}>
            <Robot robot={robot} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No robots to show</p>
  );
};

export default RobotsList;
