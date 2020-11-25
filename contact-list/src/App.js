import "./App.css";
import List from "./Components/List";
import Footer from "./Components/Footer";
import styled from "styled-components";
import GlobantLogo from "./Images/globant.png";

let MainStyled = styled.div`
  background-color: black;
  padding: 30px;
  h1 {
    color: white;
    font-family: Arial;
    font-size: 60px;
  }
`;

function App() {
  return (
    <MainStyled>
      <h1>Comments List</h1>
      <List></List>
      <Footer
        srcImage={GlobantLogo}
        redirect="https://github.com/Mely97"
        textRedirect="Click aquí para ver más proyectos"
      ></Footer>
    </MainStyled>
  );
}

export default App;
