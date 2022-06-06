import styled from 'styled-components';

export const ContactListContainer = styled.ul`
  list-style: none;
  margin: 10px;
  padding: 0;
`;
export const ContactListItem = styled.li`
  width: 600px;

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const DeletetBtn = styled.button`
width: 60px;
  height: 35px;
  padding: 5px;
  color: #e03505;
  border: 1px solid #e03505;
  border-radius: 4px;
  background-color: #fff;
  &:hover {
  outline: 1px solid #fff;
    color: #fff;
    background-color:#e03505;
 
`;
export const EditBtn = styled.button`
width: 60px;
  height: 35px;
  padding: 5px;
  color: #c58e12;
  border: 1px solid #c58e12;
  border-radius: 4px;
  background-color: #fff;
  &:hover {
  outline: 1px solid #fff;
    color: #fff;
    background-color: #c58e12;
 
`;
export const ContactListName = styled.span`
  display: inline-block;
  width: 40%;
`;
export const ContactListNumber = styled.span`
  display: inline-block;
  width: 30%;
`;
