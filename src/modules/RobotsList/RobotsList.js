import { useSelector } from "react-redux";
import styled from "styled-components";
import Robot from "../Robot/Robot";

const ListContainer = styled.div`
  > ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    max-width: 100vw;
    padding: 0;

    > li {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border: 2px solid #000;
      margin: 20px;
      border-radius: 5px;

      > img {
        object-fit: contain;
        width: 200px;
        height: 300px;
      }
      > ul {
        list-style: none;
        padding: 5px;
      }
    }
  }
  p {
    display: flex;
    justify-content: center;
    font-size: 20px;
  }
`;

const RobotsList = () => {
  const robots = useSelector((state) => state.robots);

  return robots.length !== 0 ? (
    <ListContainer>
      <ul>
        {robots.map((robot, index) => {
          return (
            <li key={index}>
              <Robot robot={robot} />
            </li>
          );
        })}
      </ul>
    </ListContainer>
  ) : (
    <ListContainer>
      <p>These aren't the droids you're looking for</p>
    </ListContainer>
  );
};

export default RobotsList;
