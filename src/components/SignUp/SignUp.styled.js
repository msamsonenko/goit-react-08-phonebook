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
export const Link = styled(NavLink)`
  text-decoration: none;
`;
export const Span = styled.span`
  margin-top: 30px;
`;

export const PageHeader = styled.h2`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  padding: 10px;
`;
export const Label = styled.label`
  margin-bottom: 10px;
`;
export const Input = styled.input`
  margin-bottom: 10px;
`;
export const Button = styled.button`
  width: 70px;
  margin-left: auto;
  margin-right: auto;
`;
