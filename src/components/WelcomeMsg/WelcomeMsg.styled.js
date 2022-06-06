import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  // background-color: #4db0ff;
  // background-repeat: no-repeat;
`;

export const WelcomeBox = styled.div`
  width: 50%;
  height: 300px;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
`;
export const WelcomeText = styled.p`
  margin-top: 68px;
  font-size: 30px;
  font-weight: 700;
`;
export const Button = styled(NavLink)`
  display: inline-flex;
  justify-content: space-evenly;
  width: 150px;
  height: 40px;
  padding: 5px;
  margin-top: 30px;
  align-items: center;
  border: none;
  border-radius: 4px;
  outline: 1px solid #4db0ff;
  font-size: 18px;
  color: #4db0ff;
  background-color: #fff;
  text-decoration: none;
  &:hover {
    outline: 1px solid #fff;
    color: #fff;
    background-color: #4db0ff;
  }
`;
