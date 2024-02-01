import { styled } from "styled-components";


export const Containers=styled.div`
    height:100%;
    display: grid;
    grid-template-areas: 
    "cardnavbar userpage"
    "cardnavbar userpage"
    ;
    grid-template-columns: 0.6fr 3fr ;
    grid-template-rows: 1fr 2fr  ;
`;

export const Cardnavbar2= styled.div`
    background-color: white;
    grid-area: cardnavbar;
    padding: 5px;
`;

export const UserList2= styled.div`
    background-color: white;
    grid-area: userpage;
    padding: 20px;
`;

export const Containerz =styled.div`
    height:100%;
    display: grid;
    grid-template-areas: 
    "userDetail card"
    "userDetail card
    ;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: 1fr 2fr  ;
`;


export const UserDetail2= styled.div`
    background-color: orangered;
    grid-area: userDetail;
    padding: 20px;
`;
export const Card= styled.div`
    background-color: blue;
    grid-area: card;
`;



