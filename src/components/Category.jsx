import { FaHamburger } from "react-icons/fa";
import { GiChiliPepper, GiRoastChicken, GiTacos } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <>
      <Heading>Buzzworthy Bites</Heading>
      <List activeClassName="activeClass">
        <SLink to={"/cuisine/Caribbean"}>
          <GiRoastChicken />
          <p>Caribbean</p>
        </SLink>

        <SLink to={"/cuisine/Mexican"}>
          <GiTacos />
          <p>Mexican</p>
        </SLink>

        <SLink to={"/cuisine/American"}>
          <FaHamburger />
          <p>American</p>
        </SLink>

        <SLink to={"/cuisine/Thai"}>
          <GiChiliPepper />
          <p>Thai</p>
        </SLink>
      </List>
    </>
  );
};

const Heading = styled.h4`
  // Add your styles for h4 here
  color: #482908; // Example color
  text-align: center;
  font-size: 0.8em;
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 15rem;

  @media screen and (max-width: 450px) {
    align-items: center;
    display:inline-block p {
      font-size: 0.65rem;
    }
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  transform: scale(0.8);

  p {
    color: white;
    font-size: 1rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: #ffd68a;
    box-shadow: 0px 0px 10px 5px #482908;
    transform: scale(1.05);

    svg {
      color: #482908;
    }
    p {
      color: #482908;
    }
  }

  &:hover {
    box-shadow: 0px 0px 15px 5px black;
  }
`;

export default Category;
