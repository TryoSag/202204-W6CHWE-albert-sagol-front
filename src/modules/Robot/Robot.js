const Robot = ({ id, name, imageUrl, speed, endurance, dateOfCreation }) => {
  return (
    <>
      <img src={imageUrl} alt={name} />
      <ul>
        <li>Id: {id}</li>
        <li>Name: {name}</li>
        <li>Speed: {speed}</li>
        <li>Endurance: {endurance}</li>
        <li>Date of Creation: {dateOfCreation}</li>
      </ul>
    </>
  );
};

export default Robot;
