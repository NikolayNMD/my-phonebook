import { styled } from 'styled-components';
import hero from 'images/girl_with_phone.jpg';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <HomeBG>
        <div>
          <h1>
            Hi! I'm your <span>phonebook</span>.
          </h1>
          <h3>Please login or register an account now.</h3>
          <BestBtn to="/login">Sign In!</BestBtn>
        </div>
      </HomeBG>
    </div>
  );
};

export default Home;

const HomeBG = styled.section`
  background-image: linear-gradient(
      rgba(21, 22, 22, 0.7),
      rgba(22, 23, 40, 0.7)
    ),
    url(${hero});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 609.9px;
  position: relative;
  div {
    position: absolute;
    right: 16%;
    top: 25%;
    h1 {
      font-family: 'Prompt', sans-serif;
      font-size: 30px;
      font-weight: 600;
      color: white;
      margin-bottom: 10px;
      span {
        color: orange;
      }
    }
    h3 {
      font-family: 'Prompt', sans-serif;
      color: white;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 15px;
    }
  }
`;

const BestBtn = styled(NavLink)`
  font-family: 'Prompt', sans-serif;
  display: inline-block;
  padding: 15px 30px;
  background-color: teal;
  color: white;
  font-size: 16px;
  text-decoration: none;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 25px teal;
  position: relative;
  &:is(:hover, :focus) {
    background-color: white;
    color: orange;
  }
`;
