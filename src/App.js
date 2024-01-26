import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

import PopUp from "./components/Popup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}> NutriRecipe</Logo>
        </Nav>

        <WelcomeMessage>
          <p>
            {" "}
            Welcome, Chef! Get ready to embark on a culinary adventure where we
            cater to all your recipe needs. Explore the delectable world of
            Whole30, discover our Popular Picks, and indulge in the latest
            Buzzworthy Bites below. Don't forget to dive into other tantalizing
            recipes using our search bar and extended search. Let's start your
            culinary journey!
          </p>
        </WelcomeMessage>

        <Search />
        <PopUp />

        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  color: #b5651d;
`;

const Nav = styled.div`
  padding: 1rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 1.5rem;
    color: #b5651d;
  }
`;

const WelcomeMessage = styled.div`
  width: 50%;
  font-size: 0.8rem;
  color: #b5651d;
`;

export default App;
