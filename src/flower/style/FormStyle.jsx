import styled from "styled-components";

export const MyLabel = styled.label`
  font-size: 14px;
  color: #414149;
  display: block;
  margin-bottom: 40px;
`;

export const MyLabelAb = styled(MyLabel)`
  position: absolute;
  color: #85858b;
  font-size: 11px;
`;

export const MyInput = styled.input`
  width: 275px;
  display: block;
  height: 32px;
  border: none;
  border-bottom: 1px solid #dddddd;
  font-size: 15px;
  &:focus,
  &:hover {
    border-bottom: 2px solid #004fff;
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &::placeholder {
    color: lightgray;
    font-size: 13px;
  }
`;

export const MyButton = styled.button`
  margin-top: 10px;
  margin-bottom: 40px;
  background-color: white;
  color: black;
  border-radius: 15px;
  font-size: 14px;
  border: 1px solid lightgray;
  width: 75px;
  &:hover {
    background-color: lightgray;
  }
`;

