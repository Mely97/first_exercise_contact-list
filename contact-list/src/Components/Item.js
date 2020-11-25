import React from "react";
import styled from "styled-components";

let ItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  padding: 30px;
  background-color: white;
  width: 55%;
  font-family: Arial;
  margin-bottom: 20px;

  .Item-father-email {
    width: 48%;
    border-color: rgb(199, 199, 199);
    border-width: 2px;
    border-style: solid;
    border-radius: 6px;
    background-color: rgb(228, 228, 228);
    color: rgb(166, 166, 166);
    text-transform: uppercase;
    padding: 5px 10px;
  }

  .Item-father-name {
    margin: 10px 0px;
    font-weight: bold;
  }
  .Item-father-name:first-letter {
    text-transform: capitalize;
  }

  .Item-father-body {
    color: rgb(193, 193, 193);
    text-transform: capitalize;
  }
`;

let Item = (props) => {
  return (
    <ItemStyled>
      <div className="Item-father-email">{props.email}</div>
      <div className="Item-father-name">{props.name}</div>
      <div className="Item-father-body">{props.body}</div>
    </ItemStyled>
  );
};

export default Item;
