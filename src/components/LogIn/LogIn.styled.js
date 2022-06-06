import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
export const ImgWrapper = styled.div`
  width: 50%;
  // background-color: #2e8dd9;
`;
export const Span = styled.span`
  margin-top: 30px;
`;

export const PageHeader = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
`;
export const Label = styled.label`
  margin-bottom: 10px;
`;
export const Input = styled.input`
  border: none;
  border-radius: 7px;
  height: 30px;
  outline: 1px solid #4db0ff;
  margin-bottom: 10px;
  // &:focus {
  //   outline: none;
  // }
`;
export const Button = styled.button`
  width: 150px;
  height: 40px;
  padding: 5px;
  align-items: center;
  color: #4db0ff;
  border: 1px solid #4db0ff;
  border-radius: 4px;
  background-color: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  &:hover {
outline: 1px solid #fff;
    color: #fff;
    background-color: #4db0ff;
`;
export const Link = styled(NavLink)`
  margin-top: 30px;
  text-decoration: none;
`;
