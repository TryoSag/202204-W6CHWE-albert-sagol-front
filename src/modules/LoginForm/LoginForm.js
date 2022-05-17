import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import loginThunk from "../../redux/thunks/loginThunk";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 250px;
    height: 150px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    > form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > input {
        padding: 5px;
        margin: 5px;
      }
    }
  }
`;

const LoginForm = () => {
  const blankFields = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(blankFields);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (formData.username !== "" && formData.password !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [formData]);

  const resetForm = () => {
    setFormData(blankFields);
  };

  const changeData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const submitLogin = (event) => {
    event.preventDefault();

    dispatch(loginThunk(formData));
    resetForm();
  };

  return (
    <FormContainer>
      <div>
        <form autoComplete="off" noValidate>
          <label htmlForm="username" />
          <input id="username" value={formData.username} />
          <label htmlForm="password" />
          <input id="password" type="password" value={formData.password} />
          <button disabled={buttonDisabled}>Log in</button>
        </form>
      </div>
    </FormContainer>
  );
};
export default LoginForm;
