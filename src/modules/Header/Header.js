import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100wv;
  display: flex;
  justify-content: center;
  background-color: #f6f6f6;

  h1 {
    display: flex;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Robots</h1>
    </HeaderContainer>
  );
};

export default Header;
