const Robot = ({
  robot: { name, imageUrl, speed, endurance, dateOfCreation },
}) => {
  return (
    <>
      <img src={imageUrl} alt={name} />
      <ul>
        <li>
          Name: <span>{name}</span>
        </li>
        <li>
          Speed: <span>{speed}</span>
        </li>
        <li>
          Endurance: <span>{endurance}</span>
        </li>
        <li>
          Date of Creation: <span>{dateOfCreation}</span>
        </li>
      </ul>
    </>
  );
};

export default Robot;
