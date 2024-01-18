import React from 'react'
import styled from 'styled-components'

const SimpleButton = styled.button`
  color:white;
  background-color:green;
`;
const LargeButton = styled(SimpleButton)`
  font-size :50px;
`;
const ReactButton = props =>{
  return<button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
  font-size :50px;
`;
const PrimaryButton = styled.button`
  color : ${props => props.primary ? 'white' :'black'};
  background-color : ${props => props.primary ? 'blue' :'gray'};
`;

const StyledStep1 = () => {

  return (
    <>
    <SimpleButton>Simple</SimpleButton>
    <LargeButton>Large</LargeButton>
    <ReactButton>React</ReactButton>
    <ReactLargeButton>ReactLarge</ReactLargeButton>
    <PrimaryButton>Normal</PrimaryButton>
    <PrimaryButton primary>Primary</PrimaryButton>
    </>
  )
}

export default StyledStep1