import React from "react";
import styled from "styled-components";

let DivStyled = styled.div`
  color: white;

  a {
    color: white;
    text-decoration: none;
  }

  .Footer-father-img {
    display: flex;
    align-items: center;
    margin: 10px 0px;
  }
`;

const Footer = (props) => {
  return (
    <DivStyled>
      <h2>
        Proyecto desarrollado por{" "}
        <strong>Melany Herrera con el apoyo Luz Stella Soto</strong>
      </h2>
      <a href={props.redirect} rel="nofollow">
        {props.textRedirect}
      </a>
      <div className="Footer-father-img">
        <img src={props.srcImage} width="10%" alt=""></img>
      </div>
    </DivStyled>
  );
};

export default Footer;
